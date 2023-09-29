import type { ParentComponent } from 'solid-js';

export const Stage: ParentComponent = (props) => {
  // NOTE: Retrieving the canvas initialized by Pixi seems to work better,
  // notably on iPhone.
  // let canvas = <canvas />;

  const app = new PIXI.Application({
    // width: 640,
    // height: 360,
    resizeTo: window,
    // view: canvas as any,
    autoDensity: true,
    resolution: devicePixelRatio,
  });

  app.ticker.minFPS = 0.1;
  app.ticker.maxFPS = 1;

  // Support Pixi Dev Tools
  (globalThis as any).__PIXI_APP__ = app;

  console.log('Create stage');

  onCleanup(() => {
    console.log('Destroy stage');
    app.destroy(false);
  });

  return (
    <>
      {app.view as any}
      <PixiAppProvider value={app}>
        <PixiParentProvider value={app.stage}>
          {props.children}
        </PixiParentProvider>
      </PixiAppProvider>
    </>
  );
};
