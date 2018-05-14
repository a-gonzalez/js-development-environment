import "./index.css";
import {
	getUsers,
	deleteUser
} from "./api/user";
import numeral from "numeral";
//const numeral = require("numeral");

/* eslint no-debugger: 1, no-console: 0 */

const cost = numeral(1200).format("$0,0.00");
const date_time = new Date().toLocaleString();

//debugger; // eslint-disable-line no-debugger

console.log("I would pay %s for this awesome cource!", cost);
//console.log(`I would pay ${cost} for this course!`);

getUsers().then(result =>
{
	let body = "";
	global.document.getElementsByTagName("span")[0].innerHTML = date_time;

	result.forEach(user =>
	{
		body += `
			<tr>
			<td>${user.id}</td>
			<td>${user.firstname}</td>
			<td>${user.lastname}</td>
			<td>${user.email}</td>
			<td><a href="#" data-id="${user.id}" class="delete">Delete</a></td>
			</tr>`;
	});
	global.document.getElementById("users").innerHTML = body;

	const delete_links = global.document.getElementsByClassName("delete");

	Array.from(delete_links, link =>
	{
		link.onclick = function(event)
		{
			const element = event.target;
			event.preventDefault();

			deleteUser(element.attributes["data-id"].value);

			const row = element.parentNode.parentNode;
			row.parentNode.removeChild(row);
		}
	});
});