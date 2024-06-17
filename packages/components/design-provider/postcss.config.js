const tailwindcss = require("tailwindcss");
const postcssFlexbugsFixesPlugin = require("postcss-flexbugs-fixes");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
    plugins: [
        postcssPresetEnv({
            features: {
                "nesting-rules": false
            }
        }),
        postcssFlexbugsFixesPlugin,
        "tailwindcss/nesting",
        tailwindcss
    ]
};
