import * as PIXI from 'pixi.js';

export const Stage: ParentComponent = (props) => {
  let canvas = <canvas />;

  const app = new PIXI.Application({
    width: 640,
    height: 360,
    view: canvas as any,
  });

  const context: IPixiContext = {
    app,
    parent: app.stage,
  };

  // test

  console.log('create stage');

  onCleanup(() => {
    console.log('destroy stage');
    app.destroy(false);
  });

  return (
    <PixiContext.Provider value={context}>
      {canvas}
      {props.children}
    </PixiContext.Provider>
  );
};
