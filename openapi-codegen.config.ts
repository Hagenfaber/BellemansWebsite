import {
    generateSchemaTypes,
    generateReactQueryComponents,
} from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";
export default defineConfig({
    bellemans: {
        from: {
            source: "url",
            url: "http://localhost:5000/openapi/v1.json"
        },
        outputDir: "src/endpoints",
        to: async (context: any) => {
            const filenamePrefix = "bellemans";
            const { schemasFiles } = await generateSchemaTypes(context, {
                filenamePrefix,
            });
            await generateReactQueryComponents(context, {
                filenamePrefix,
                schemasFiles,
            });
        },
    },
});