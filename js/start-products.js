// ТОВАРИ - Products

import  {products} from "./start.js";


	// Basket

	export const productList = document.getElementById("product-list");
	export const cartContent = document.querySelector(".content__list");
	export const total = document.querySelector(".total");
	export const makeOrderBtn = document.querySelector(".makeOrder");
	export const cartQuantity = document.querySelector(".cart__quantity");

	// Заповнення карток товарів

	export function createProductCard(product) {
		const productItem = document.createElement("div");
		productItem.classList.add("products__item");

		const productLink = document.createElement("a");
		productLink.href = "#";

		const productImage = document.createElement("img");
		productImage.classList.add("products__image");
		productImage.src = `css/img/Main/Menu/Main_manu/Main_dishes_img/${product.image}`;
		productImage.alt = product.name;

		const productName = document.createElement("h2");
		productName.classList.add("products__name");
		productName.textContent = product.name;

		const productText = document.createElement("div");
		productText.classList.add("products__text");
		productText.textContent = product.text;

		const productsBottom = document.createElement("div");
		productsBottom.classList.add("products__bottom");
		productsBottom.appendChild(productName);
		productsBottom.appendChild(productText);

		const productPrice = document.createElement("span");
		productPrice.textContent = `${product.price}₴`;

		const buyButton = document.createElement("a");
		buyButton.href = "##";
		buyButton.classList.add("products__button");
		buyButton.idL;
		buyButton.textContent = "To Card";
		buyButton.addEventListener("click", () => addToCart(product));
		const buttonBuy = document.createElement("a");
		buttonBuy.href = "##";
		buttonBuy.classList.add("products__button__buy");
		buttonBuy.idL;
		buttonBuy.textContent = "Buy";

		const productsPriceContainer = document.createElement("div");
		productsPriceContainer.classList.add("products__price");
		productsPriceContainer.appendChild(productPrice);
		productsPriceContainer.appendChild(buyButton);
		productsPriceContainer.appendChild(buttonBuy);

		productItem.appendChild(productImage);
		productItem.appendChild(productsBottom);
		productItem.appendChild(productsPriceContainer);

		return productItem;
	}

	//  document.addEventListener('DOMContentLoaded', function () {
	// 	// Читаємо збережені дані з локального сховища
	// 	const savedCart = JSON.parse(localStorage.getItem('cart')) || [];

	// 	// Відтворюємо вміст корзини на основі збережених даних
	// 	savedCart.forEach((savedProduct) => {
	// 	  addToCart(savedProduct);
	// 	});

	// 	// Оновлюємо загальну суму та кількість товарів в корзині
	// 	updateTotal();
	// 	updateCartQuantity();
	//  });

	export function addToCart(product) {
		// Додаємо продукт до кошика
		const cartProductItem = document.createElement("li");
		cartProductItem.classList.add("cart-content__item");

		const cartProduct = document.createElement("article");
		cartProduct.classList.add("cart-content__product", "cart-product");

		const cartProductImage = document.createElement("img");
		cartProductImage.src = `css/img/Main/Menu/Main_manu/Main_dishes_img/${product.image}`;
		cartProductImage.alt = product.name;

		const cartProductName = document.createElement("h3");
		cartProductName.textContent = product.name;

		const cartProductPrice = document.createElement("span");
		cartProductPrice.classList.add("cart-price");
		cartProductPrice.textContent = `${product.price}₴`;

		const quantityContainer = document.createElement("div");
		quantityContainer.classList.add("quantity-container");

		const decreaseButton = document.createElement("button");
		decreaseButton.textContent = "-";
		decreaseButton.addEventListener("click", () =>
			updateQuantity(
			cartProductPrice,
			product.price,
			"subtract",
			quantitySpan,
			cartProductItem
			)
		);

		const quantitySpan = document.createElement("span");
		cartProductPrice.classList.add("cart-product-price");
		quantitySpan.textContent = "1";

		const increaseButton = document.createElement("button");
		increaseButton.textContent = "+";
		increaseButton.addEventListener("click", () =>
			updateQuantity(
			cartProductPrice,
			product.price,
			"add",
			quantitySpan,
			cartProductItem
			)
		);

		quantityContainer.appendChild(decreaseButton);
		quantityContainer.appendChild(quantitySpan);
		quantityContainer.appendChild(increaseButton);

		cartProduct.appendChild(cartProductImage);
		cartProduct.appendChild(cartProductName);
		cartProduct.appendChild(cartProductPrice);
		cartProduct.appendChild(quantityContainer);

		cartProductItem.appendChild(cartProduct);
		cartContent.appendChild(cartProductItem);

		updateCartQuantity();
		updateTotal(product.price, "add");
		console.log(`Product added to cart: ${product.name}`);

		//   // Зберігаємо оновлені дані кошика в локальне сховище
		//   saveCartToLocalStorage();
	}

	export function updateQuantity(
		priceElement,
		productPrice,
		operation,
		quantitySpan,
		cartProductItem
	) {
		let quantity = parseInt(quantitySpan.textContent);

		if (operation === "add") {
			quantity++;
		} else if (operation === "subtract" && quantity > 0) {
			quantity--;
		}

		quantitySpan.textContent = `${quantity}`;
		updateTotal(productPrice, operation, quantity, priceElement);

		if (quantity === 0) {
			// Видаляємо товар, якщо кількість стала 0
			cartContent.removeChild(cartProductItem);
			updateCartQuantity();
		}
		saveCartToLocalStorage();
	}

	//  function saveCartToLocalStorage() {
	// 	// Зберігаємо дані кошика в локальне сховище
	// 	const cartItems = document.querySelectorAll('.cart-content__item');
	// 	const cartData = [];

	// 	cartItems.forEach((item) => {
	// 	  const productName = item.querySelector('.cart-content__product h3').textContent;
	// 	  const productPrice = parseFloat(item.querySelector('.cart-price').textContent.replace('₴', ''));
	// 	  const quantity = parseInt(item.querySelector('.quantity-container span').textContent);

	// 	  cartData.push({ name: productName, price: productPrice, quantity: quantity });
	// 	});

	// 	localStorage.setItem('cart', JSON.stringify(cartData));
	//  }

	export function updateTotal(amount, operation, quantity, priceElement) {
		const currentTotal = parseFloat(total.textContent.replace("₴", ""));
		const productPrice = parseFloat(amount);

		if (operation === "add") {
			total.textContent = `${(currentTotal + productPrice).toFixed(2)}₴`;
		} else if (operation === "subtract") {
			total.textContent = `${(currentTotal - productPrice).toFixed(2)}₴`;
		}

		const updatedProductPrice = (productPrice * quantity).toFixed(2);
		priceElement.textContent = `${updatedProductPrice}₴`;
	}

	export function updateCartQuantity() {
		// Оновлюємо кількість елементів у кошику
		const cartItems = document.querySelectorAll(".cart-content__item");
		const cartQuantityValue = cartItems.length;
		cartQuantity.textContent = cartQuantityValue;
	}

	makeOrderBtn.addEventListener("click", () => {
		// Викликаємо функцію для оформлення замовлення
		displayOrderSummary();
	});

	export function displayOrderSummary() {}

	export function initApp() {
		products.forEach((product) => {
			const productCard = createProductCard(product);
			productList.appendChild(productCard);
		});
	}

	initApp();

