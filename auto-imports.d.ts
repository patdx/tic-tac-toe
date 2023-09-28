/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// Generated by unplugin-auto-import
export {}
declare global {
  const App: typeof import('./src/app')['App']
  const Container: typeof import('./src/pixi/create-pixi-component')['Container']
  const Dynamic: typeof import('solid-js/web')['Dynamic']
  const ErrorBoundary: typeof import('solid-js')['ErrorBoundary']
  const For: typeof import('solid-js')['For']
  const Game: typeof import('./src/components/game')['Game']
  const Index: typeof import('solid-js')['Index']
  const Link: typeof import('@solidjs/router')['Link']
  const Match: typeof import('solid-js')['Match']
  const NavLink: typeof import('@solidjs/router')['NavLink']
  const Navigate: typeof import('@solidjs/router')['Navigate']
  const Outlet: typeof import('@solidjs/router')['Outlet']
  const PIXI: typeof import('pixi.js')
  const Piece: typeof import('./src/tic-tac-toe-components/piece')['Piece']
  const PixiAppContext: typeof import('./src/pixi/context')['PixiAppContext']
  const PixiAppProvider: typeof import('./src/pixi/context')['PixiAppProvider']
  const PixiParentContext: typeof import('./src/pixi/context')['PixiParentContext']
  const PixiParentProvider: typeof import('./src/pixi/context')['PixiParentProvider']
  const PixiText: typeof import('./src/pixi/create-pixi-component')['PixiText']
  const PlayAgain: typeof import('./src/components/play-again')['PlayAgain']
  const Portal: typeof import('solid-js/web')['Portal']
  const Rectangle: typeof import('./src/pixi/create-pixi-component')['Rectangle']
  const Route: typeof import('@solidjs/router')['Route']
  const Router: typeof import('@solidjs/router')['Router']
  const Routes: typeof import('@solidjs/router')['Routes']
  const Scene1: typeof import('./src/components/scene-1')['Scene1']
  const Scene2: typeof import('./src/scene-2/scene-2')['Scene2']
  const Scene2Container: typeof import('./src/scene-2/container')['Scene2Container']
  const Show: typeof import('solid-js')['Show']
  const Sprite: typeof import('./src/tic-tac-toe-components/sprite')['Sprite']
  const Square: typeof import('./src/tic-tac-toe-components/square')['Square']
  const Stage: typeof import('./src/pixi/stage')['Stage']
  const Suspense: typeof import('solid-js')['Suspense']
  const SuspenseList: typeof import('solid-js')['SuspenseList']
  const Switch: typeof import('solid-js')['Switch']
  const View: typeof import('./src/yoga/view')['View']
  const Yoga: typeof import('./src/yoga/yoga')['Yoga']
  const YogaNode: typeof import('./src/yoga/yoga')['YogaNode']
  const YogaParentContext: typeof import('./src/yoga/context')['YogaParentContext']
  const YogaRoot: typeof import('./src/pixi/yoga-root')['YogaRoot']
  const _mergeSearchString: typeof import('@solidjs/router')['_mergeSearchString']
  const batch: typeof import('solid-js')['batch']
  const children: typeof import('solid-js')['children']
  const createContext: typeof import('solid-js')['createContext']
  const createDeferred: typeof import('solid-js')['createDeferred']
  const createEffect: typeof import('solid-js')['createEffect']
  const createIntegration: typeof import('@solidjs/router')['createIntegration']
  const createMemo: typeof import('solid-js')['createMemo']
  const createMutable: typeof import('solid-js/store')['createMutable']
  const createPixiComponent: typeof import('./src/pixi/create-pixi-component')['createPixiComponent']
  const createRenderEffect: typeof import('solid-js')['createRenderEffect']
  const createResource: typeof import('solid-js')['createResource']
  const createRoot: typeof import('solid-js')['createRoot']
  const createSelector: typeof import('solid-js')['createSelector']
  const createSignal: typeof import('solid-js')['createSignal']
  const createStore: typeof import('solid-js/store')['createStore']
  const gsap: typeof import('./src/utils/gsap')['gsap']
  const hashIntegration: typeof import('@solidjs/router')['hashIntegration']
  const hydrate: typeof import('solid-js/web')['hydrate']
  const indexArray: typeof import('solid-js')['indexArray']
  const isPointType: typeof import('./src/pixi/point-utils')['isPointType']
  const isServer: typeof import('solid-js/web')['isServer']
  const lazy: typeof import('solid-js')['lazy']
  const mapArray: typeof import('solid-js')['mapArray']
  const mergeProps: typeof import('solid-js')['mergeProps']
  const movesAvailable: typeof import('./src/utils/state')['movesAvailable']
  const nextTurn: typeof import('./src/utils/state')['nextTurn']
  const node: typeof import('./src/yoga/yoga')['node']
  const normalizeIntegration: typeof import('@solidjs/router')['normalizeIntegration']
  const observable: typeof import('solid-js')['observable']
  const on: typeof import('solid-js')['on']
  const onCleanup: typeof import('solid-js')['onCleanup']
  const onError: typeof import('solid-js')['onError']
  const onMount: typeof import('solid-js')['onMount']
  const parsePoint: typeof import('./src/pixi/point-utils')['parsePoint']
  const pathIntegration: typeof import('@solidjs/router')['pathIntegration']
  const pointsAreEqual: typeof import('./src/pixi/point-utils')['pointsAreEqual']
  const produce: typeof import('solid-js/store')['produce']
  const reconcile: typeof import('solid-js/store')['reconcile']
  const render: typeof import('solid-js/web')['render']
  const renderToStream: typeof import('solid-js/web')['renderToStream']
  const renderToString: typeof import('solid-js/web')['renderToString']
  const renderToStringAsync: typeof import('solid-js/web')['renderToStringAsync']
  const resetState: typeof import('./src/utils/state')['resetState']
  const setState: typeof import('./src/utils/state')['setState']
  const setValue: typeof import('./src/pixi/point-utils')['setValue']
  const splitProps: typeof import('solid-js')['splitProps']
  const state: typeof import('./src/utils/state')['state']
  const staticIntegration: typeof import('@solidjs/router')['staticIntegration']
  const untrack: typeof import('solid-js')['untrack']
  const useApp: typeof import('./src/pixi/context')['useApp']
  const useContext: typeof import('solid-js')['useContext']
  const useHref: typeof import('@solidjs/router')['useHref']
  const useIsRouting: typeof import('@solidjs/router')['useIsRouting']
  const useLocation: typeof import('@solidjs/router')['useLocation']
  const useMatch: typeof import('@solidjs/router')['useMatch']
  const useMountChild: typeof import('./src/pixi/use-mount-child')['useMountChild']
  const useNavigate: typeof import('@solidjs/router')['useNavigate']
  const useParams: typeof import('@solidjs/router')['useParams']
  const useParent: typeof import('./src/pixi/context')['useParent']
  const useResolvedPath: typeof import('@solidjs/router')['useResolvedPath']
  const useRouteData: typeof import('@solidjs/router')['useRouteData']
  const useRoutes: typeof import('@solidjs/router')['useRoutes']
  const useSearchParams: typeof import('@solidjs/router')['useSearchParams']
  const useTick: typeof import('./src/pixi/use-tick')['useTick']
  const useTransition: typeof import('solid-js')['useTransition']
  const useYogaNode: typeof import('./src/yoga/use-yoga-node')['useYogaNode']
  const winnerInfo: typeof import('./src/utils/state')['winnerInfo']
}
// for type re-export
declare global {
  // @ts-ignore
  export type { ParentComponent, Component } from 'solid-js'
}
