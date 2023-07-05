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
			_hoc: path.resolve(__dirname, "./src/HOC"),
			_mocks: path.resolve(__dirname, "./src/mocks"),
			_services: path.resolve(__dirname, "./src/services"),
			_screens: path.resolve(__dirname, "./src/screens"),
			_types: path.resolve(__dirname, "./src/types"),
			_utils: path.resolve(__dirname, "./src/utils"),
		},
	},
});
