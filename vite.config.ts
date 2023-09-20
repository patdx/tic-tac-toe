import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    solid(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      ],
      dirs: ['src/**/*'],
      imports: ['solid-js'],
      dts: './src/auto-imports.d.ts',
    }),
  ],
});
