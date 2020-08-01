const tailwindcss = require("tailwindcss");

module.exports = {
	plugins: [
		tailwindcss("./tailwind.config.js"),
		require("autoprefixer"),
		require("@fullhuman/postcss-purgecss")({
			content: [
				"./src/components/*.js",
				"./src/components/Preview/*.js",
				"./public/index.html",
				"./src/App.js"
			],
			defaultExtractor: content =>
				content.match(/[A-Za-z0-9-_:/]+/g) || []
		})
	]
};
