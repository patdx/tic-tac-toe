import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
// import AutoImport from 'unplugin-auto-import/vite';
import Unimport from 'unimport/unplugin';

export default defineConfig({
  plugins: [
    solid(),
    Unimport.vite({
      // include: [
      //   /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      // ],
      dirs: ['./src/*', './src/pixi/*'],

      imports: [
        { name: 'ParentComponent', from: 'solid-js', type: true },
        { name: 'Component', from: 'solid-js', type: true },
        { name: '*', as: 'PIXI', from: 'pixi.js' },
      ],
      presets: [
        'solid-js',
        // {
        //   package: 'pixi.js',
        //   // type
        //   // ignore: ['isStream', /^[A-Z]/, /^[a-z]*$/, (r) => r.length > 8],
        // },
      ],
      // dts: './src/auto-imports.d.ts',
      dts: true,
    }),
  ],
  build: {
    minify: false,
  },
});
