document.addEventListener("DOMContentLoaded", function () {
	// Додати приклад товару
	addProductToTable(1, "Риба", "$10.99", 50);
	addProductToTable(2, "Короп", "$88", 7);

	// Додайте інші товари, які потрібно автоматично додати
});

function addProductToTable(id, name, price, quantity) {
	var tableBody = document.getElementById("productTable").getElementsByTagName('tbody')[0];

	var newRow = tableBody.insertRow();
	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	var cell3 = newRow.insertCell(2);
	var cell4 = newRow.insertCell(3);

	cell1.innerHTML = id;
	cell2.innerHTML = name;
	cell3.innerHTML = price;
	cell4.innerHTML = quantity;
}

// Функція для відправки замовлення на сервер
function submitOrder() {
	const customerName = document.getElementById('customerName').value;
	const foodItem = document.getElementById('foodItem').value;
	const quantity = document.getElementById('quantity').value;

	// Перевірка на заповненість полів
	if (!customerName || !foodItem || !quantity) {
		 alert('Будь ласка, заповніть всі поля');
		 return;
	}

	// Створення об'єкта замовлення
	const order = {
		 customerName,
		 foodItem,
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
