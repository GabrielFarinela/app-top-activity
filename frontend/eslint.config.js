import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

// Mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: pluginJs.configs.recommended,
});

export default [
	{
		languageOptions: {
			parser: tseslintParser,
			globals: globals.browser,
			ecmaVersion: 2021,
			sourceType: "module",
		},
		plugins: {
			"@typescript-eslint": tseslint,
			react: pluginReactConfig,
		},
		rules: {
			"@typescript-eslint/no-explicit-any": "warn", // Permitir 'any' com aviso
			"no-unused-vars": "warn", // Emitir aviso para variáveis não utilizadas
			"@typescript-eslint/no-unused-vars": "warn", // Emitir aviso para variáveis TypeScript não utilizadas
		},
	},
	...compat.extends("standard-with-typescript"),
	pluginReactConfig,
];
