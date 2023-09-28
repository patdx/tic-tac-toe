export const Scene2Container: ParentComponent = (props) => {
  var square = new PIXI.Graphics();

  const { node } = useYogaNode();

  node.setFlex(1);
  node.setMinWidth(200);
  node.setHeight(200);

  useMountChild(square);

  const [layout, setLayout] = createSignal<any>();

  useTick(() => {
    const layout = node.getComputedLayout();
    setLayout(layout);

    square.position.set(layout.left, layout.top);
    square.clear();
    square.beginFill('red');
    square.lineStyle(2, 0xffd900, 1);
    square.drawRect(0, 0, layout.width, layout.height);
    square.endFill();
  });

  return (
    <PixiParentProvider value={square}>
      <PixiText
        text={JSON.stringify(layout(), undefined, 2)}
        position={[10, 10]}
      />
      {props.children}
    </PixiParentProvider>
  );
};
