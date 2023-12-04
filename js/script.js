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
