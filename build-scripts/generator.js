/* eslint-disable no-console */
import jsf from "json-schema-faker";
import fs from "fs";
import chalk from "chalk";
import { schema } from "./schema";

const json = JSON.stringify(jsf(schema));
const filename = "./src/api/db.json";

fs.writeFile(filename, json, (error)=>
{
	if (error)
	{
		return console.log(chalk.red(error));
	}
	else
	{
		console.log(chalk.blue("Data generated."));
	}
});