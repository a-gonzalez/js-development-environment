export default function getBaseUrl()
{
	//const development = window.location.hostname === "localhost";

	//console.log("Environment: ", window.location.hostname);

	//return development ? "http://localhost:3001/" : "/";
	return getQueryStringParameterByName("mock") ? "http://localhost:3001/" : "/";
}

function getQueryStringParameterByName(name, url)
{
	if (!url)
	{
		url = window.location.href;
	}
	name = name.replace(/[\[\]]/g, "\\$&");

	const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)")
	const results = regex.exec(url);

	if (!results)
	{
		return null;
	}

	if (!results[2])
	{
		return "";
	}

	return decodeURIComponent(results[2].replace(/\+/g, " "));
}