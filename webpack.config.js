const path = require("path")

module.exports = {
	entry: "./src/main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "docs")
	},
	resolve: {
		alias: {
			"vue$": "vue/dist/vue.esm.js"
		}
	}
};
