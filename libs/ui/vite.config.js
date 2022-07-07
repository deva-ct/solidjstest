import { defineConfig } from 'vite';
import path from 'path';
import solidPlugin from 'vite-plugin-solid';
import { name, version } from './package.json';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.jsx"),
      fileName: "index",
      formats: ["es"],
      name: `${name}.${version}`
    },
    outDir: './lib',
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
