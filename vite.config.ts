import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@entities": path.resolve(__dirname, "./src/models/entities"),
			"@errors": path.resolve(__dirname, "./src/models/errors"),
			"@factories": path.resolve(__dirname, "./src/models/factories"),
			"@interfaces": path.resolve(__dirname, "./src/models/interfaces"),
			"@providers": path.resolve(__dirname, "./src/models/providers"),
			"@usecases": path.resolve(__dirname, "./src/models/usecases"),
			"@composed": path.resolve(
				__dirname,
				"./src/presenters/components/composed",
			),
			"@ui": path.resolve(__dirname, "./src/presenters/components/ui"),
			"@contexts": path.resolve(__dirname, "./src/presenters/contexts"),
			"@hooks": path.resolve(__dirname, "./src/presenters/hooks"),
			"@layouts": path.resolve(__dirname, "./src/presenters/layouts"),
			"@middlewares": path.resolve(__dirname, "./src/presenters/middlewares"),
			"@pages": path.resolve(__dirname, "./src/presenters/pages"),
			"@utils": path.resolve(__dirname, "./src/utils"),
		},
	},
});
