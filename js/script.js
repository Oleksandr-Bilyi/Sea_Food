"use script"


//Визначення дисплею чи екрану користувача
const isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	Blackberry: function() {
		return navigator.userAgent.match(/Blackberry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (
		isMobile.Android() ||
		isMobile.Blackberry() ||
		isMobile.iOS() ||
		isMobile.Opera() ||
		isMobile.Windows());

	}
};

//Події при натисканні на дисплей чи екран

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if(menuArrows.length > 0) {
		for (let index = 0; index < Array.length; index++){
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function(e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}

} else {
	document.body.classList.add('_pc');
}

//Меню Бургер
const iconMenu = document.querySelector('.menu__icon');
if(iconMenu) {
	const menuBody = document.querySelector('.menu__body');
	const menuLogo = document.querySelector('.header__logo');
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock'),
		iconMenu.classList.toggle('_active'),
		menuLogo.classList.toggle('_active'),
		menuBody.classList.toggle('_active');
	});


}

//Прокрутка при Нажиманні

/*
const menulinks = document.querySelectorAll('.menu__link[data-goto]');

if(menulinks.length > 0) {
	Array.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top  + pageYOffset - document.querySelector('header').offsetHeight;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
*/
//Анімація Пупапів

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if(popupLinks.length > 0) {
	for(let index = 0; index < popupLinks.length; index++){
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e){
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const currentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			e.preventDefault();
		});
	}
}

// Close-icon
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const popup = el.closest('.popup');
      popupClose(popup);
    });
  }
}


//Open
function popupOpen(currentPopup) {
	if(currentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} 	else {
			bodyLock();
		}
		currentPopup.classList.add('open');
		currentPopup.addEventListener("click", function(e){
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}

		});
	}
}
//Close popup
function popupClose(popupActive, doUnlock = true) {
	if (unlock && popupActive) {
	  popupActive.classList.remove('open');
	  if (doUnlock) {
		 bodyUnlock();
	  }
	}
 }
//For overflow
function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	if(lockPadding.length > 0){
		for (let index = 0; index < lockPadding.length; index++){
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function (){
		unlock = true;
	}, timeout);
}

function bodyUnlock() {
	setTimeout(function(){
		if(lockPadding.length > 0){
			for (let index = 0; index < lockPadding.length; index++){
				const el = lockPadding[index];
				el.style.paddingRight = '0px'
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function(){
		unlock = true;
	}, timeout);
}


						// Basket



// Збільшення кількості товарів



// Зменшення кількості товарів



// Видалення товарів


const productList = document.getElementById('product-list');
const cartContent = document.querySelector('.content__list');
const total = document.querySelector('.total');
const makeOrderBtn = document.querySelector('.makeOrder');
const popupTitle = document.querySelector('.popup__title');
const popupText = document.querySelector('.popup__text');
const popup = document.querySelector('.popup');
const cartQuantity = document.querySelector('.cart__quantity');

								// ТОВАРИ

const products = [
	{
		id: 1,
		name: 'Product name 1',
		image: '2.jpg',
		text: 'dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus rerum quaerat voluptatum velit mollitia vitae laudantium, optio eaque inventore ullam consequuntur aperiam! Aut doloremque voluptatem asperiores laudantium, sit laborum.',
		price: '280.00'
	},
	{
		id: 2,
		name: 'Product name 2',
		image: '1.jpg',
		text: 'dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus rerum quaerat voluptatum velit mollitia vitae laudantium, optio eaque inventore ullam consequuntur aperiam! Aut doloremque voluptatem asperiores laudantium, sit laborum.',
		price: '300.00'
	},
	{
		id: 3,
		name: 'Product name 3',
		image: '3.jpg',
		text: 'dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus rerum quaerat voluptatum velit mollitia vitae laudantium, optio eaque inventore ullam consequuntur aperiam! Aut doloremque voluptatem asperiores laudantium, sit laborum.',
		price: '550.00'
	},
	{
		id: 4,
		name: 'Product name 4',
		image: '3.jpg',
		text: 'dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus rerum quaerat voluptatum velit mollitia vitae laudantium, optio eaque inventore ullam consequuntur aperiam! Aut doloremque voluptatem asperiores laudantium, sit laborum.',
		price: '450.00'
	},
	{
		id: 5,
		name: 'Product name 5',
		image: '2.jpg',
		text: 'dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus rerum quaerat voluptatum velit mollitia vitae laudantium, optio eaque ',
		price: '620.00'
	},
	{
		id: 6,
		name: 'Product name 6',
		image: '1.jpg',
		text: 'dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus rerum quaerat voluptatum velit mollitia vitae laudantium, optio eaque inventore ullam consequuntur aperiam! Aut doloremque voluptatem asperiores laudantium, sit laborum.',
		price: '360.00'
	},


];

						// Заповнення карток товарів


function createProductCard(product) {
	const productItem = document.createElement('div');
	productItem.classList.add('products__item');

	const productLink = document.createElement('a');
	productLink.href = '#';


	const productImage = document.createElement('img');
	productImage.classList.add('products__image');
  	productImage.src = `css/img/Main/Menu/Main_manu/Main_dishes_img/${product.image}`;
 	productImage.alt = product.name;

	const productName = document.createElement('h2');
	productName.classList.add('products__name');
	productName.textContent = product.name;

	const productText = document.createElement('div');
	productText.classList.add('products__text');
	productText.textContent = product.text;

	const productsBottom = document.createElement('div');
 	productsBottom.classList.add('products__bottom');
  	productsBottom.appendChild(productName);
  	productsBottom.appendChild(productText);

	const productPrice = document.createElement('span');
	productPrice.textContent = `${product.price}₴`;

	const buyButton = document.createElement('a');
	buyButton.href = '##';
	buyButton.classList.add('products__button');
	buyButton.idL
	buyButton.textContent = 'To Card';
	buyButton.addEventListener('click', () => addToCart(product));

	const productsPriceContainer = document.createElement('div');
	productsPriceContainer.classList.add('products__price');
	productsPriceContainer.appendChild(productPrice);
	productsPriceContainer.appendChild(buyButton);

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

 function addToCart(product) {
	// Додаємо продукт до кошика
	const cartProductItem = document.createElement('li');
	cartProductItem.classList.add('cart-content__item');

	const cartProduct = document.createElement('article');
	cartProduct.classList.add('cart-content__product', 'cart-product');

	const cartProductImage = document.createElement('img');
	cartProductImage.src = `css/img/Main/Menu/Main_manu/Main_dishes_img/${product.image}`;
	cartProductImage.alt = product.name;

	const cartProductName = document.createElement('h3');
	cartProductName.textContent = product.name;

	const cartProductPrice = document.createElement('span');
	cartProductPrice.classList.add('cart-price');
	cartProductPrice.textContent = `${product.price}₴`;

	const quantityContainer = document.createElement('div');
	quantityContainer.classList.add('quantity-container');

	const decreaseButton = document.createElement('button');
	decreaseButton.textContent = '-';
	decreaseButton.addEventListener('click', () => updateQuantity(cartProductPrice, product.price, 'subtract', quantitySpan, cartProductItem));

	const quantitySpan = document.createElement('span');
	cartProductPrice.classList.add('cart-product-price');
	quantitySpan.textContent = '1';

	const increaseButton = document.createElement('button');
	increaseButton.textContent = '+';
	increaseButton.addEventListener('click', () => updateQuantity(cartProductPrice, product.price, 'add', quantitySpan, cartProductItem));

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
	updateTotal(product.price, 'add');
	console.log(`Product added to cart: ${product.name}`);

	//   // Зберігаємо оновлені дані кошика в локальне сховище
	//   saveCartToLocalStorage();
 }



 function updateQuantity(priceElement, productPrice, operation, quantitySpan, cartProductItem) {
	let quantity = parseInt(quantitySpan.textContent);

	if (operation === 'add') {
	  quantity++;
	} else if (operation === 'subtract' && quantity > 0) {
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

 function updateTotal(amount, operation, quantity, priceElement) {
	const currentTotal = parseFloat(total.textContent.replace('₴', ''));
	const productPrice = parseFloat(amount);

	if (operation === 'add') {
	  total.textContent = `${(currentTotal + productPrice).toFixed(2)}₴`;
	} else if (operation === 'subtract') {
	  total.textContent = `${(currentTotal - productPrice).toFixed(2)}₴`;
	}

	const updatedProductPrice = (productPrice * quantity).toFixed(2);
	priceElement.textContent = `${updatedProductPrice}₴`;
 }


 function updateCartQuantity() {
	// Оновлюємо кількість елементів у кошику
	const cartItems = document.querySelectorAll('.cart-content__item');
	const cartQuantityValue = cartItems.length;
	cartQuantity.textContent = cartQuantityValue;

 }



 makeOrderBtn.addEventListener('click', () => {
	// Викликаємо функцію для оформлення замовлення
	displayOrderSummary();
 });

 function displayOrderSummary() {

 }

 function initApp() {
	products.forEach((product) => {
	  const productCard = createProductCard(product);
	  productList.appendChild(productCard);
	});
 }

 initApp();