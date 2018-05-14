export default function getBaseUrl()
{
	const development = window.location.hostname === "localhost";

	//console.log("Environment: ", window.location.hostname);

	return development ? "http://localhost:3001/" : "/";
}