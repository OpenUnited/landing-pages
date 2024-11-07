import { sync } from 'glob';
import { defineConfig } from 'vite'
import path, { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default defineConfig(({ command, mode, ssrBuild }) => {
    const list = [];
    if (mode === 'production') {
        sync('src/*.html').forEach((file) => {
            list.push(file);
        })
    }
    return {
        root: "src",
        base: '/landing-pages/',
        server: {
            open: true
        },
        plugins: [
            handlebars({
                partialDirectory: resolve('./src/partials'),
            }),
        ],
        resolve: {
            alias: {
                "@css": path.resolve("./src/assets/css/"),
                "@/*": path.resolve("./*"),
            },
        },
        build: {
            outDir: "../docs",
            rollupOptions: {
                input: [
                    ...list,
                ],
            }
        }
    }
})
