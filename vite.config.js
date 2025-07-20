// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// import viteReact from '@vitejs/plugin-react'
// export default defineConfig({
//   plugins: [
//     viteReact(),
//     tailwindcss(),
//   ],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(), tailwindcss(),],
})
