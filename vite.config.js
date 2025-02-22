import { defineConfig } from 'vite';
    import path from 'path';

    export default defineConfig({
      root: path.resolve(__dirname, 'client'),
      build: {
        outDir: path.resolve(__dirname, 'dist'),
      },
      server: {
        port: 8080,
        hot: true,
        open: true
      },
    });
