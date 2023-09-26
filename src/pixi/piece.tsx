export const Piece: ParentComponent<{ text: string; x: number; y: number }> = (
  props
) => {
  const sprite = new PIXI.Text(props.text, {
    fontSize: '52px',
    fill: 'white',
    align: 'center',
  });

  useMountChild(sprite);

  sprite.anchor.set(0.5, 0.5);
  sprite.position.set(props.x, props.y);

  const parentContext = useContext(PixiContext);
  const app = parentContext?.app;

  const context: IPixiContext = {
    app: app as any,
    parent: sprite,
  };

  createEffect(() => {
    sprite.text = props.text;
  });

  // test23

  onCleanup(() => {
    console.log('destroy piece');
    sprite.destroy();
  });

  return (
    <PixiContext.Provider value={context}>
      {props.children}
    </PixiContext.Provider>
  );
};
