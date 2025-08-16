declare const plugin: {
    meta: {
        name: string;
        version: string;
    };
    configs: {
        base: {
            readonly languageOptions: {
                readonly ecmaVersion: 2020;
                readonly sourceType: "module";
                readonly parserOptions: {
                    readonly ecmaFeatures: {
                        readonly jsx: true;
                    };
                };
            };
            readonly rules: {
                readonly 'prettier/prettier': readonly ["warn", {
                    readonly printWidth: 100;
                    readonly tabWidth: 2;
                    readonly useTabs: false;
                    readonly semi: true;
                    readonly singleQuote: true;
                    readonly trailingComma: "all";
                    readonly bracketSpacing: true;
                    readonly bracketSameLine: false;
                }];
                readonly 'react/prop-types': "off";
            };
            readonly settings: {
                readonly react: {
                    readonly version: "detect";
                };
            };
        };
        recommended: {
            readonly files: readonly ["**/*.{js,jsx,ts,tsx}"];
            readonly languageOptions: {
                readonly sourceType: "module";
            };
            readonly rules: {
                readonly 'brace-style': "off";
                readonly '@typescript-eslint/brace-style': readonly ["error", "1tbs", {
                    readonly allowSingleLine: false;
                }];
                readonly '@typescript-eslint/camelcase': "off";
                readonly '@typescript-eslint/explicit-function-return-type': "off";
                readonly '@typescript-eslint/explicit-module-boundary-types': "off";
                readonly 'no-dupe-class-members': "off";
                readonly '@typescript-eslint/no-dupe-class-members': readonly ["error"];
                readonly '@typescript-eslint/no-empty-function': "off";
                readonly 'no-shadow': "off";
                readonly '@typescript-eslint/no-shadow': "warn";
                readonly curly: readonly ["error", "all"];
                readonly eqeqeq: readonly ["error", "always", {
                    readonly null: "never";
                }];
                readonly 'no-implicit-coercion': "error";
                readonly 'no-param-reassign': readonly ["error", {
                    readonly props: true;
                    readonly ignorePropertyModificationsForRegex: readonly ["^draft"];
                }];
                readonly 'sort-imports': "off";
                readonly 'import/order': "off";
                readonly 'simple-import-sort/exports': "warn";
                readonly 'simple-import-sort/imports': "warn";
            };
        };
    };
};
export default plugin;
//# sourceMappingURL=index.d.ts.map