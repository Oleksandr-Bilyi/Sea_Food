document.addEventListener("DOMContentLoaded", function () {
	// Додати приклад товару
	addProductToTable(1, "Олег", "eamil@gmail.com", "Риба", "$6.00", 38654);
	addProductToTable(2, "Наташа", "eamil@gmail.com", "Стартер", "$5.99", 57433);
	addProductToTable(3, "Василь", "eamil@gmail.com", "Десерт", "$10.99", 24324);
	addProductToTable(4, "Антон", "eamil@gmail.com", "Короп", "$7.99", 34352);

});

function addProductToTable(id, name, email, product, price, courier) {
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
	cell6.innerHTML = courier;


	// Додати кнопку "Прийняти замовлення" до кожного рядка
	var acceptButton = document.createElement("button");
	acceptButton.innerHTML = "Accept order";
	acceptButton.classList.add('buttonAccept');
	acceptButton.onclick = function() {
		//  acceptOrder(id, name, email, product, price, courier, quantity);
		 deleteRow(newRow);
	};

	newRow.appendChild(acceptButton);


	// Add "Delete" button to each row
	var deleteButton = document.createElement("button");
	deleteButton.innerHTML = "Delete";
	deleteButton.classList.add('buttonDelete');
	deleteButton.onclick = function() {
		deleteRow(newRow);
	};
	newRow.appendChild(deleteButton);
}

// Function to delete a row
function deleteRow(row) {
	var tableBody = document.getElementById("productTable").getElementsByTagName('tbody')[0];
	tableBody.removeChild(row);
}

function deleteCourierRow(row) {
	var tableBody = document.getElementById("courierRequestsTable").getElementsByTagName('tbody')[0];
	tableBody.removeChild(row);
}

function deleteCurrentCourierRow(row) {
	var tableBody = document.getElementById("courierCurrentTable").getElementsByTagName('tbody')[0];
	tableBody.removeChild(row);
}



// Функція для очищення рядків таблиці
function clearTableRows() {
	var tableBody = document.getElementById("productTable").getElementsByTagName('tbody')[0];
	tableBody.innerHTML = ""; // Видаляємо вміст tbody
}

// Функція для очищення елементів у списку прийнятих замовлень


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


						// Admin panel

		function tabSwitch(new_tab, new_content) {
			document.getElementById('content_1').style.display = 'none';
			document.getElementById('content_2').style.display = 'none';
			document.getElementById('content_3').style.display = 'none';
			document.getElementById('content_4').style.display = 'none';
			document.getElementById('content_5').style.display = 'none';
			document.getElementById(new_content).style.display = 'block';
			document.getElementById('tab_1').className = '';
			document.getElementById('tab_2').className = '';
			document.getElementById('tab_3').className = '';
			document.getElementById('tab_4').className = '';
			document.getElementById('tab_5').className = '';
			document.getElementById(new_tab).className = 'active';
		}

		function updateCourierRequestsTable() {
			const tableBody = document.getElementById("courierRequestsTable").getElementsByTagName('tbody')[0];
			// Clear existing rows
			tableBody.innerHTML = "";

			// Fetch and add new data from the server or local storage
			// ...

			// Example: Add dummy data
			addCourierRequestToTable("Djon" ,"john@example.com", 534678756);
			addCourierRequestToTable("Ann" ,"jane@example.com", 234355656);
			//
			currentCourierToTable(1233, "Djon" ,"john@example.com", 534678756);
			currentCourierToTable(1324, "Devid" ,"john@example.com", 534678756);
			currentCourierToTable(9546, "Maks" ,"john@example.com", 534678756);
	  }

	  // Function to add a courier registration request row to the table
	  function addCourierRequestToTable(name, email, phone) {
			const tableBody = document.getElementById("courierRequestsTable").getElementsByTagName('tbody')[0];
			const newRow = tableBody.insertRow();

			const cell1 = newRow.insertCell(0);
			const cell2 = newRow.insertCell(1);
			const cell3 = newRow.insertCell(2);


			cell1.innerHTML = name;
			cell2.innerHTML = email;
			cell3.innerHTML = phone;


			const acceptButton = document.createElement("button");
			acceptButton.innerHTML = "Accept";
			acceptButton.classList.add('buttonAccept');
			acceptButton.classList.add('moveButton');
			acceptButton.onclick = function () {
				 // Add logic to accept the courier registration request
				 // ...
			};

			newRow.appendChild(acceptButton);

			const deleteButton = document.createElement("button");
			deleteButton.innerHTML = "Delete";
			deleteButton.classList.add('buttonDelete');
			deleteButton.onclick = function () {
					deleteCourierRow(newRow)
			};


			newRow.appendChild(deleteButton);
	  }

	  function currentCourierToTable(id, name, email, phone) {
			const tableBody = document.getElementById("courierCurrentTable").getElementsByTagName('tbody')[0];
			const newRow = tableBody.insertRow();

			const cell1 = newRow.insertCell(0);
			const cell2 = newRow.insertCell(1);
			const cell3 = newRow.insertCell(2);
			const cell4 = newRow.insertCell(3);


			cell1.innerHTML = id;
			cell2.innerHTML = name;
			cell3.innerHTML = email;
			cell4.innerHTML = phone;


			const deleteButton = document.createElement("button");
			deleteButton.innerHTML = "Delete";
			deleteButton.classList.add('buttonDelete');
			deleteButton.classList.add('moveButtonDelete');

			deleteButton.onclick = function () {
				deleteCurrentCourierRow(newRow)
			};


			newRow.appendChild(deleteButton);
	  }



	  // Initial update of the courier registration requests table when the page loads
	  updateCourierRequestsTable();
