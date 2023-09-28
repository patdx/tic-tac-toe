import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    devtools({
      autoname: true,
    }),
    solid(),
    // NOTE: autoimport detects file changes automatically
    // but "unimport", its parent plugin, does not
    AutoImport({
      // include: [
      //   /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      // ],
      dirs: ['./src/**/*'],

      imports: [
        'solid-js',
        '@solidjs/router',
        {
          from: 'solid-js',
          imports: ['ParentComponent', 'Component'],
          type: true,
        },
        // { from: 'pixi.js', imports: [['*', 'PIXI']], type: true },
        {
          'pixi.js': [['*', 'PIXI']],
        },
        // in the next build, type imports can probably be scanned
        // automatically
        // {
        //   from: './src/pixi/context.ts',
        //   imports: ['IPixiContext'],
        //   type: true,
        // },
        // { name: '*', as: 'PIXI', from: 'pixi.js' },
      ],
      // presets: [
      //   'solid-js',
      //   // {
      //   //   package: 'pixi.js',
      //   //   // type
      //   //   // ignore: ['isStream', /^[A-Z]/, /^[a-z]*$/, (r) => r.length > 8],
      //   // },
      // ],
      // dts: './src/auto-imports.d.ts',
      dts: true,
    }),
  ],
  build: {
    minify: false,
    target: 'esnext', // support top level await (or we can use vite-top-level-await plugin)
  },
});
