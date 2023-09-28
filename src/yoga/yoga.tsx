import initYoga from 'yoga-wasm-web';
import yogaWasUrl from 'yoga-wasm-web/dist/yoga.wasm?url';

const responsePromise = fetch(yogaWasUrl);
const yogaModule = await WebAssembly.compileStreaming(responsePromise);

export const Yoga = await initYoga(yogaModule);
