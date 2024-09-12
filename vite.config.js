import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            hotFile: 'public/reviews.hot', // Most important lines
            buildDirectory: '/build', // Most important lines
            input: ['resources/js/app.js'],
            refresh: true,
        }),
    ],
});
