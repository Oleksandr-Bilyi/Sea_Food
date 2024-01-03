
"use script"


//Кнопка показу та приховання пароля
const inputPass = document.getElementById('password');
const inputPass1 = document.getElementById('password1');
const iconPass = document.getElementById('form-icon');
const iconPass1 = document.getElementById('form-icon-1');

iconPass.addEventListener("click", function(e) {
	if (inputPass.getAttribute('type') === "password"){
		inputPass.setAttribute('type', 'text');
	} else {
		inputPass.setAttribute('type', 'password');
	}
	e.preventDefault();
});
iconPass1.addEventListener("click", function(e) {
	if (inputPass1.getAttribute('type') === "password"){
		inputPass1.setAttribute('type', 'text');
	} else {
		inputPass1.setAttribute('type', 'password');
	}
	e.preventDefault();
});
