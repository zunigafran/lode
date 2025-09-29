import expoConfig from "eslint-config-expo/flat.js";
import boundaries from "eslint-plugin-boundaries";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  ...expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ["dist/*"],
  },
  {
    plugins: {
      boundaries,
    },
    rules: {
      ...boundaries.configs.recommended.rules,
    },
    settings: {
      "boundaries/include": ["src/**/*"],
      "boundaries/dependency-nodes": [
        "require",
        "import",
        "dynamic-import",
        "export",
      ],
      "boundaries/elements": [
        {
          mode: "full",
          type: "shared",
          pattern: [
            "src/components/**/*",
            "src/data/**/*",
            "src/features/**/*",
            "src/hooks/**/*",
            "src/lib/**/*",
          ],
        },
      ],
      rules: {
        "boundaries/no-unknown": ["error"],
        "boundaries/element-types": [
          2,
          {
            default: "disallow",
            rules: [
              {
                from: "app/pages",
                allow: [
                  "assets",
                  "components",
                  "constants",
                  "data",
                  "features",
                  "hooks",
                  "lib",
                  "app/pages",
                ],
              },
              {
                from: "components",
                allow: ["data", "hooks", "lib"],
              },
              {
                from: "features",
                allow: ["data", "hooks", "lib"],
              },
            ],
          },
        ],
      },
    },
  },
];
