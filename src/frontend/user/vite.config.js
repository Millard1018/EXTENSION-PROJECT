import { resolve } from 'path';

export default {
    root: './src/frontend',
    server: {
        open: "admin/admin.html",
    },
    build: {
        outDir: resolve(__dirname, '../../dist/user'),
        emptyOutDir: true
    }
};