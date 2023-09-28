export const Piece: ParentComponent<{ text: string; x: number; y: number }> = (
  props
) => {
  const text = new PIXI.Text(props.text, {
    fontSize: '52px',
    fill: 'white',
    align: 'center',
  });

  useMountChild(text);

  text.anchor.set(0.5, 0.5);
  text.position.set(props.x, props.y);

  createEffect(() => {
    text.text = props.text;
  });

  // test23

  onCleanup(() => {
    console.log('destroy piece');
    text.destroy();
  });

  return <PixiParentProvider value={text}>{props.children}</PixiParentProvider>;
};
