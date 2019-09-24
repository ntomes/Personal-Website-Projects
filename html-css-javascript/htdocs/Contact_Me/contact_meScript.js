function validateFirstName() {
	var fname = document.getElementById("firstName");
	var error = document.getElementById("errorFirstName");
	var validName = /[A-Za-z -']$/;

	if (validName.test(fname.value)) {
		fname.style.background = "lightgreen";
		error.style.display = "none";
	}
	else {
		fname.style.background = "salmon";
		error.style.display = "block";
	}
}

function validateLastName() {
	var lname = document.getElementById("lastName");
	var validName = /[A-Za-z -']$/;
	var error = document.getElementById("errorLastName");

	if (validName.test(lname.value)) {
		lname.style.background = "lightgreen";
		error.style.display = "none";
	}
	else {
		lname.style.background = "salmon";
		error.style.display = "block";
	}
}

function validateEmail() {
	var email = document.getElementById("email");
	var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var error = document.getElementById("errorEmail");

	if (validEmail.test(email.value)) {
		email.style.background = "lightgreen";
		error.style.display = "none";
	}
	else {
		email.style.background = "salmon";
		error.style.display = "block";
	}
}

