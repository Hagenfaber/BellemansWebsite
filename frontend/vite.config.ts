import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { visualizer } from "rollup-plugin-visualizer";
import path from "path"
import viteReact from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
        TanStackRouterVite({ autoCodeSplitting: true }),
        viteReact()
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
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
