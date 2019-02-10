function myFunction(id) {

	var protocol = location.protocol;
	var slashes = protocol.concat("//");
	var host = slashes.concat(window.location.hostname);
	var server = "?https://github.com/tisho25bg/CV/blob/master/"
	switch (id) {
		case 1:

			window.location.replace(host+server+"home.html");

			break;
		case 2:

			window.location.replace(host+server+"my-resume.html");
			break;
		case 3:

			window.location.replace(host+server+"my-skills.html");
			break;
		case 4:

			window.location.replace(host+server+"my-job.html");
			break;
		case 5:
			// document.write("5");
			window.location.replace(host+server+"home.html");
			break;
		case 6:
			// document.write("6");
			window.location.replace(host+server+"my-resume.html");
			break;
	}
}

