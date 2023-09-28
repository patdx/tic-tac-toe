// It should be possible to have multiple yoga layouts, for example,
// a menu, or UI layer
// by default the yoga layout should be mounted INSIDE the game stage
// and its yogaNode node will take the size of the app view

import { createUniqueId } from 'solid-js';

// export const node = Yoga.Node.create();
// node.setAlignContent(ALIGN_CENTER);

export const useYogaNode = (id?: string) => {
  id = id ?? `yoga-node-${createUniqueId()}`;
  const yogaNode = Yoga.Node.create();

  // defaults, based on satori:
  // https://github.com/vercel/satori/blob/bdd0dca29bf63e2188d5504b86fc5c0041b8bcc0/src/satori.ts#L67
  // yogaNode.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
  // yogaNode.setFlexWrap(Yoga.WRAP_WRAP);
  // yogaNode.setAlignContent(Yoga.ALIGN_AUTO);
  // yogaNode.setAlignItems(Yoga.ALIGN_FLEX_START);
  // yogaNode.setJustifyContent(Yoga.JUSTIFY_FLEX_START);
  // yogaNode.setOverflow(Yoga.OVERFLOW_HIDDEN);

  const yogaParent = useContext(YogaParentContext);
  const pixiApp = useApp();

  if (yogaParent) {
    // yoga child mode
    // yoga layout
    yogaParent.insertChild(yogaNode, yogaParent.getChildCount());
    onCleanup(() => {
      yogaParent.removeChild(yogaNode);
    });
    yogaNode.setWidth('auto');
    yogaNode.setHeight('auto');
  } else if (pixiApp) {
    console.log(
      `${id} is yoga root, setting to ${pixiApp.view.width}x${pixiApp.view.height}`
    );
    yogaNode.setWidth(pixiApp.view.width);
    yogaNode.setHeight(pixiApp.view.height);
    useTick(() => {
      yogaNode.setWidth(pixiApp.view.width);
      yogaNode.setHeight(pixiApp.view.height);
      yogaNode.calculateLayout(
        pixiApp.view.width,
        pixiApp.view.height,
        Yoga.DIRECTION_LTR
      );
    });
  } else {
    throw new Error(`useYogaNode must be child of Yoga Node or Pixi Container`);
  }

  console.log(`Created yoga node ${id}`);

  onCleanup(() => {
    console.log(`Unmounting yoga node ${id}`);
    yogaNode.free();
  });

  return { id, node: yogaNode };
};
