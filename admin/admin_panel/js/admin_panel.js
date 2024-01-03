document.addEventListener("DOMContentLoaded", function () {
	// Додати приклад товару
	addProductToTable(1, "Олег", "eamil@gmail.com", "Риба", "$6.00", 50);
	addProductToTable(2, "Наташа", "eamil@gmail.com", "Стартер", "$5.99", 16);
	addProductToTable(3, "Василь", "eamil@gmail.com", "Десерт", "$10.99", 34);
	addProductToTable(4, "Антон", "eamil@gmail.com", "Короп", "$7.99", 4);



	// Додайте інші товари, які потрібно автоматично додати
});

function addProductToTable(id, name, email, product, price, quantity) {
	var tableBody = document.getElementById("productTable").getElementsByTagName('tbody')[0];

	var newRow = tableBody.insertRow();
	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	var cell3 = newRow.insertCell(2);
	var cell4 = newRow.insertCell(3);
	var cell5 = newRow.insertCell(4);
	var cell6 = newRow.insertCell(5);


	cell1.innerHTML = id;
	cell2.innerHTML = name;
	cell3.innerHTML = email;
	cell4.innerHTML = product;
	cell5.innerHTML = price;
	cell6.innerHTML = quantity;

	// Додати кнопку "Прийняти замовлення" до кожного рядка
	var acceptButton = document.createElement("button");
	acceptButton.innerHTML = "Прийняти замовлення";
	acceptButton.onclick = function() {
		 acceptOrder(id, name, email, product, price, quantity);
	};

	newRow.appendChild(acceptButton);
}


// Функція для прийняття замовлення менеджером
function acceptOrder(id, name, email, product, price, quantity) {

	clearOrderList();

	// Очистити рядки форми
	document.getElementById('customerName').value = '';
	document.getElementById('foodItem').value = '';
	document.getElementById('quantity').value = '';
	document.getElementById('email').value = '';
	document.getElementById('price').value = '';


}

// Функція для очищення рядків таблиці
function clearTableRows() {
	var tableBody = document.getElementById("productTable").getElementsByTagName('tbody')[0];
	tableBody.innerHTML = ""; // Видаляємо вміст tbody
}

// Функція для очищення елементів у списку прийнятих замовлень
function clearOrderList() {
	var orderList = document.getElementById("orderList");
	orderList.innerHTML = ""; // Видаляємо вміст списку
}

// Функція для прийняття всіх замовлень
function acceptOrderForAll() {

	// Перебрати всі рядки таблиці та викликати функцію прийняття для кожного
	var table = document.getElementById("productTable");
	var rows = table.getElementsByTagName("tr");

	for (var i = 1; i < rows.length; i++) { // Починаємо з 1, оскільки рядок 0 - заголовок
		 var cells = rows[i].getElementsByTagName("td");
		 var id = cells[0].innerHTML;
		 var name = cells[1].innerHTML;
		 var email = cells[2].innerHTML;
		 var product = cells[3].innerHTML;
		 var price = cells[4].innerHTML;
		 var quantity = cells[5].innerHTML;

		 acceptOrder(id, name, email, product, price, quantity);
	}

	// Очистити список прийнятих замовлень
	clearOrderList();
}

// Функція для відправки замовлення на сервер
function submitOrder() {
	const customerName = document.getElementById('customerName').value;
	const foodItem = document.getElementById('foodItem').value;
	const customerEmail = document.getElementById('email').value;
	const productPrice = document.getElementById('price').value;
	const quantity = document.getElementById('quantity').value;



	// Перевірка на заповненість полів
	if (!customerName || !foodItem || !quantity || !productPrice || !customerEmail) {
		 alert('Будь ласка, заповніть всі поля');
		 return;
	}

	// Створення об'єкта замовлення
	const order = {
		 customerName,
		 foodItem,
		 email,
		 price,
		 quantity
	};

	// Відправка замовлення на сервер за допомогою AJAX
	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'url-to-your-server-endpoint', true);
	xhr.setRequestHeader('Content-Type', 'application/json');

	// Перетворення об'єкта замовлення в JSON та відправка на сервер
	xhr.send(JSON.stringify(order));

	// Додавання замовлення до списку
	orders.push(order);

	// Оновлення списку на сторінці
	updateOrderList();

	// Очищення полів форми
	document.getElementById('customerName').value = '';
	document.getElementById('foodItem').value = '';
	document.getElementById('quantity').value = '';
	document.getElementById('email').value = '';
	document.getElementById('price').value = '';

}

// Функція для отримання замовлень з сервера
function fetchOrders() {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'url-to-your-server-endpoint', true);

	// Обробка відповіді від сервера
	xhr.onreadystatechange = function () {
		 if (xhr.readyState === 4 && xhr.status === 200) {
			  // Парсинг JSON-відповіді
			  orders = JSON.parse(xhr.responseText);

			  // Оновлення списку на сторінці
			  updateOrderList();
		 }
	};

	// Відправка запиту на сервер
	xhr.send();
}

// Виклик функції для отримання замовлень при завантаженні сторінки
fetchOrders();
