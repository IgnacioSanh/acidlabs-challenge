import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			_assets: path.resolve(__dirname, "./src/assets"),
			_components: path.resolve(__dirname, "./src/components"),
			_screens: path.resolve(__dirname, "./src/screens"),
		},
	},
});
