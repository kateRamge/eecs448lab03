function validator(pass1,pass2) {
	if((pass1!=pass2)||(pass1.length<8)){
		if(pass1!=pass2){
			alert("Passwords don't match!");
		}
		else{
			alert("Password too short!");
		}
	}
}
