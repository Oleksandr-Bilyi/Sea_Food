
"use script"

//Руєстрація
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');
let role = document.getElementById('role');
let courier = document.querySelector('#courier__option');
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

	alert(`${nameUser}, you have successfully registered`);

	window.location.href = "../../index.html";

	e.preventDefault();
});

//Кнопка показу та приховання пароля
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


//Авторизація
function logIn() {
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	let role = document.getElementById('role').value;

	let email1 = 'qwer';
	let password1 = 321;

	if(email == email1 &&  password == password1){
		window.location.href = "../../index.html"
		alert('All are great');
	} else {
		alert('Error');
		window.location.href ="../login.html"
	}
}

							//Кур'єр
// Додавання класу "act" до елемента з id "content__input-id" при зміні значення ролі
role.addEventListener("change", function () {
	let contentInputId = document.getElementById('code-id');
	if (role.value === 'courier') {
		 contentInputId.classList.add('act');
	} else {
		 contentInputId.classList.remove('act');
	}
});