import type {
  DisplayObject,
  Container as PixiContainer,
  Sprite,
} from 'pixi.js';
import { createUniqueId, type ParentComponent } from 'solid-js';
import type { Node } from 'yoga-wasm-web';
import type { PointLike } from './point-utils';

export type YogaInitFunction = (node: Node) => any;

const ENABLE_DEBUG_MODE: boolean = false;

export type PixiSolidComponent<T extends DisplayObject> = ParentComponent<{
  yoga?: boolean | YogaInitFunction;
  /**
   * if true, width and height will be synced from Pixi
   * to yoga
   */
  yogaFitContent?: boolean;
  init?: (pixiObj: T) => any;
  position?: PointLike;
  anchor?: PointLike;
  /** only available for text like objects */
  text?: string;
  /** show debug info if true */
  debug?: boolean;
  /** anchor in the center (see react-three-flex) still working on it */
  centerAnchor?: boolean;
}>;

export function createPixiComponent<T extends DisplayObject>(
  init: () => T
): PixiSolidComponent<T> {
  const PixiComponent: PixiSolidComponent<T> = (props) => {
    const id = 'solid-component-' + createUniqueId();
    const pixiObj = init();

    pixiObj.name = id;

    if (props.centerAnchor) {
      const anchor = (pixiObj as any as Sprite).anchor;
      if (!anchor) {
        console.warn(
          `${id}: centerAnchor was set but this component does not support anchor`
        );
      } else {
        anchor.set(0.5, 0.5);
      }
    } else {
      createEffect(() => {
        // console.log(`Updating anchor...`);
        setValue(pixiObj, 'anchor', props.anchor);
      });
    }

    useMountChild(pixiObj);

    createEffect(() => {
      // console.log(`Updating position...`);
      setValue(pixiObj, 'position', props.position);
    });

    createEffect(() => {
      // console.log(`Updating text...`);
      setValue(pixiObj, 'text', props.text);
    });

    const [layout, setLayout] = createSignal<any>();

    let yogaNode: Node | null = null;

    if (props.yoga) {
      const { node } = useYogaNode(id);
      yogaNode = node;

      if (typeof props.yoga === 'function') {
        props.yoga(node);
      }

      useTick(() => {
        const { width, height } = pixiObj as any as PixiContainer;

        if (props.yogaFitContent) {
          // TODO: I think this will actually be used for the calculation on the
          // next frame...
          // pass all the widths and heights from pixi to yoga BEFORE
          // calculating the yoga layout
          node.setWidth(width);
          node.setHeight(height);
        }

        const layout = node.getComputedLayout();
        setLayout(layout); // save for debug purposes

        if (props.centerAnchor) {
          // TODO: support arbitrary anchor
          pixiObj.position.set(
            layout.left + width / 2,
            layout.top + height / 2
          );
        } else {
          pixiObj.position.set(layout.left, layout.top);
        }

        console.log(`Layout of ${id}: ${JSON.stringify(layout)}`);

        // For non-fit content types, sync the calculated yoga sizes back
        // NOTE: this doesn't quite work because it rescales the pixi object
        // if (!props.yogaFitContent) {
        //   (pixiObj as any as PixiContainer).width = layout.width;
        //   (pixiObj as any as PixiContainer).height = layout.height;
        // }
      });
    }

    props.init?.(pixiObj);

    onCleanup(() => {
      pixiObj.destroy();
    });

    const yogaParent = yogaNode ?? useContext(YogaParentContext);

    return (
      // TODO: fix the typings
      <>
        <YogaParentContext.Provider value={yogaParent}>
          <PixiParentProvider value={pixiObj as any}>
            {props.children}
          </PixiParentProvider>
        </YogaParentContext.Provider>
        <Show when={ENABLE_DEBUG_MODE && props.debug}>
          <PixiText
            text={[
              id,
              JSON.stringify(layout()),
              yogaNode?.getChildCount(),
            ].join('\n')}
            position={[layout()?.left ?? 0, layout()?.top ?? 0]}
          />
        </Show>
      </>
    );
  };

  return PixiComponent;
}

export const Container = createPixiComponent(() => new PIXI.Container());

/** Text overrides with other globals */
export const PixiText = createPixiComponent(
  () =>
    new PIXI.Text(undefined, {
      fontSize: '12px',
      fill: 'white',
    })
);
