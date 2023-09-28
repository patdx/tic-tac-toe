import * as PIXI from 'pixi.js';

export const PixiAppContext = createContext<PIXI.Application>();
export const PixiAppProvider = PixiAppContext.Provider;
export const useApp = () => useContext(PixiAppContext);

export const PixiParentContext = createContext<PIXI.Container>();
export const PixiParentProvider = PixiParentContext.Provider;
export const useParent = () => useContext(PixiParentContext);
