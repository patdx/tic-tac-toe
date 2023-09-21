import type { TickerCallback } from 'pixi.js';

export function useTick(fn: TickerCallback<any>) {
  const app = useContext(PixiContext)?.app;

  app?.ticker.add(fn);

  onCleanup(() => {
    app?.ticker.remove(fn);
  });
}

export function useMountChild(child: any) {
  const parent = useContext(PixiContext)?.parent;

  parent?.addChild(child);

  onCleanup(() => {
    parent?.removeChild(child);
  });
}
