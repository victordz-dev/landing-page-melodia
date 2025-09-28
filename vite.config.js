import { defineConfig } from 'vite'

export default defineConfig({

    root: 'src',
    base: '/nome-do-seu-repositorio/',

    build: {
        outDir: '../dist'
    }
})