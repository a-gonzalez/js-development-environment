/* eslint-disable no-console */
import webpack from "webpack";
import webpackConfig from "../webpack.config.prod";
import chalk from "chalk";

process.env.NODE_ENV = "production";

console.log(chalk.blue("Generating production build. It will take a moment."));

webpack(webpackConfig).run((error, stats)=>
{
	let result = 0;

	if (error)
	{
		console.log(chalk.red(error));

		result = 1;
	}
	const json_stats = stats.toJson();

	if (json_stats.hasErrors)
	{
		return json_stats.errors.map(error => console.log(chalk.red(error)));
	}

	if (json_stats.hasWarnings)
	{
		console.log(chalk.yellow("Webpack generated the following warnings: "));
		json_stats.warnings.map(warning => console.log(chalk.yellow(warning)));
	}
	console.log(`Webpack stats: ${stats}`);
	console.log(chalk.blue("Application has been built for production and placed in /dist folder."));

	return result;
});