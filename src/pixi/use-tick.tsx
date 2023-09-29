import type { TickerCallback } from 'pixi.js';

export function useTick(
  fn: TickerCallback<any>,
  options?: {
    runImmediately?: boolean;
  }
) {
  const app = useApp();

  if (options?.runImmediately) {
    fn(0);
  }

  app?.ticker.add(fn);

  onCleanup(() => {
    app?.ticker.remove(fn);
  });
}

// DisplayObject | Container
