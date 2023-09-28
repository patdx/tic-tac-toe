import type { TickerCallback } from 'pixi.js';

export function useTick(fn: TickerCallback<any>) {
  const app = useApp();

  app?.ticker.add(fn);

  onCleanup(() => {
    app?.ticker.remove(fn);
  });
}

// DisplayObject | Container
