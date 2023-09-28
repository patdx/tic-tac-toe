import type { Node } from 'yoga-wasm-web';

export const View: ParentComponent<{ yoga?: (node: Node) => void }> = (
  props
) => {
  const { node } = useYogaNode();

  props.yoga?.(node);

  return (
    <YogaParentContext.Provider value={node}>
      {props.children}
    </YogaParentContext.Provider>
  );
};
