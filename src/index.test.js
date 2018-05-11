import { expect } from "chai";
import jsdom from "jsdom";
import fs from "fs";

describe("First Test...", ()=>
{
	it("should pass", (done)=>
	{
		expect(true).to.equal(true);

		done();
	});
});

describe("Index.html H1...", ()=>
{
	it("should say \"Abril Gonzalez\"", (done)=>
	{
		const index = fs.readFileSync("./src/index.html", "utf-8");

		jsdom.env(index, function(error, window)
		{
			const h1 = window.document.getElementsByTagName("h1")[0];

			expect(h1.innerHTML).to.equal("Abril");

			done();

			window.close();
		});

		//expect(true).to.equal(false);
	});
});

describe("Index.html H2...", ()=>
{
	it("should say \"Abril Gonzalez\"", (done)=>
	{
		const index = fs.readFileSync("./src/index.html", "utf-8");

		jsdom.env(index, function(error, window)
		{
			const h2 = window.document.getElementsByTagName("h2")[0];

			expect(h2.innerHTML).to.equal("Date / Time");

			done();

			window.close();
		});

		//expect(true).to.equal(false);
	});
});