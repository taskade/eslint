declare const _default: {
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
export default _default;
//# sourceMappingURL=base.d.ts.map