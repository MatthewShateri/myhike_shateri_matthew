import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'login.html'),
                app: resolve(__dirname, 'main.html'),
                skeleton: resolve(__dirname, 'skeleton.html'),
            },
        },
    },
});
