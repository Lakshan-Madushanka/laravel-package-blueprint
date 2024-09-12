import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            hotFile: 'public/package.hot', // Most important lines
            buildDirectory: '/build', // Most important lines
            input: ['resources/js/app.js'],
            refresh: true,
        }),
    ],
});
