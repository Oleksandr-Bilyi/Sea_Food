"use script"

let name = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');
let role = document.querySelector('#role');

let users = {};

function User(name, email, password, role){
	this.name = name;
	this.email = email;
	this.password = password;
	this.role = role;
}

function createId(users) {
	return Object.keys(users).length;
}

submit.addEventListener("click", function(e){
	const nameUser = name.value;
	const emailUser = email.value;
	const passwordUser = password.value;
	const roleUser = role.value;

	const user = new User(nameUser, emailUser, passwordUser, roleUser)

	const userId = 'User' + createId(users);
	users[userId] = user;

	console.log(users);

	alert('${nameUser}, you have successfully registered');

	e.preventDefault();
});


const inputPass = document.getElementById('password');
const iconPass = document.getElementById('form-icon');

iconPass.addEventListener("click", function(e) {
	if (inputPass.getAttribute('type') === "password"){
		inputPass.setAttribute('type', 'text');
	} else {
		inputPass.setAttribute('type', 'password');
	}
	e.preventDefault();
});