import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteTsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), viteTsconfigPaths()],
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
