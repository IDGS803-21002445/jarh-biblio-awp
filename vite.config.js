import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { VitePWA } from 'vite-plugin-pwa';

// export default defineConfig({
//   plugins: [
//     react(),
//     VitePWA({
//       registerType: 'autoUpdate',
//       manifest: {
//         name: 'jarh-biblio-awp',
//         short_name: 'jarh-biblio-awp',
//         theme_color: '#ffffff',
//         display: 'standalone',
//         icons: [
//           {
//             src: 'https://via.placeholder.com/192',
//             sizes: '192x192',
//             type: 'image/png'
//           }
//         ]
//       }
//     })
//   ]
// });