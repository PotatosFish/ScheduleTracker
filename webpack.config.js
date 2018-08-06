const path = require("path")

module.exports = {
	entry: "./src/main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "docs")
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				]
			}
		]
	},
	resolve: {
		alias: {
			"vue$": "vue/dist/vue.esm.js"
		}
	}
};
