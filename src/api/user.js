import "whatwg-fetch";
import getBaseUrl from "./base-url";

const base_url = getBaseUrl();

export function getUsers()
{
	return get("users");
}

export function deleteUser(id)
{
	return remove(`users/${id}`);
}

function get(url)
{
	return fetch(base_url + url)
		.then(onSuccess, onError);
}

function remove(url)
{
	const request = new Request(base_url + url,
	{
		method: "DELETE"
	});
	return fetch(request).then(onSuccess, onError);
}

function onSuccess(response)
{
	return response.json();
}

function onError(error)
{
	console.log(error); // eslint-disable-line no-console
}