// eslint-disable-next-line import/extensions
const tailwindConfig = require("@laverve/design-provider/tailwind.config.js");

module.exports = {
    ...tailwindConfig,
    content: [...tailwindConfig.content, "./stories/**/*.{js,ts,jsx,tsx}", "../../packages/**/src/**/*.{js,ts,jsx,tsx}"]
};
