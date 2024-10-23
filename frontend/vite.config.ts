import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [TanStackRouterVite({}), react()],
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    ...(mode === "development" && {
      plugins: [
        visualizer({
          open: false,
          gzipSize: true,
          template: "treemap",
        }) as PluginOption,
      ],
    }),
  }
})
