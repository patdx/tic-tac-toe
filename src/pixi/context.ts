import * as PIXI from 'pixi.js';

export type IPixiContext = {
  app: PIXI.Application;
  parent: PIXI.Container;
};

export const PixiContext = createContext<IPixiContext>();
