import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import process from 'process'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/resume/',
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, 'src/assets/svg')],
      symbolId: 'icon-[name]',
    }),
    htmlPlugin(loadEnv(mode, process.cwd())),
  ],
  // server: {
  //   port: 2333
  // },
  resolve: {
  },
  
}))

function htmlPlugin(env: ReturnType<typeof loadEnv>) {
  return {
    name: 'html-transform',
    transformIndexHtml: {
      enforce: 'pre' as const,
      transform: (html: string): string =>
        html.replace(/%(.*?)%/g, (match, p1) =>
          env[p1] ?? match
        ),
    }
  }
}
