import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom'],
    },

    resolve: {
        dedupe: ['react', 'react-dom'],
    },

    plugins: [react(), tailwindcss()],
})
