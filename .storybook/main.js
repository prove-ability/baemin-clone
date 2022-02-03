const path = require("path");

module.exports = {
	stories: ["../**/*.stories.@(js|jsx|ts|tsx|mdx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-postcss",
		"@storybook/addon-docs",
	],
	framework: "@storybook/react",
	webpackFinal: async (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			components: path.resolve(__dirname, "../components"),
			styles: path.resolve(__dirname, "../styles"),
			pages: path.resolve(__dirname, "../pages"),
		};
		return config;
	},
};
