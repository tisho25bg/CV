function myFunction(id) {

	var protocol = location.protocol;
	var slashes = protocol.concat("//");
	var host = slashes.concat(window.location.hostname);
	switch (id) {
		case 1:
			alert(host);
			window.location.replace(host+"https://github.com/tisho25bg/CV/blob/master/home.html");
			document.write(host);
			break;
		case 2:

			window.location.replace("http://htmlpreview.github.io/?https://github.com/tisho25bg/CV/blob/master/my-resume.html");
			break;
		case 3:

			window.location.replace("http://htmlpreview.github.io/?https://github.com/tisho25bg/CV/blob/master/my-skills.html");
			break;
		case 4:

			window.location.replace("http://htmlpreview.github.io/?https://github.com/tisho25bg/CV/blob/master/my-job.html");
			break;
		case 5:
			// document.write("5");
			window.location.replace("http://htmlpreview.github.io/?https://github.com/tisho25bg/CV/blob/master/home.html");
			break;
		case 6:
			// document.write("6");
			window.location.replace("http://htmlpreview.github.io/?https://github.com/tisho25bg/CV/blob/master/my-resume.html");
			break;
	}
}

