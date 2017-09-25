function validator() {
	var pass1 = document.getElementById("p1").value;
	var pass2 = document.getElementById("p2").value;
	if(pass1.length<8) {
		alert("Password too short!");
	}
	else if(pass1==pass2) {
		alert("Your password is ready to go");
	}
	else {
		alert("Your passwords do not match!");
	}
}
