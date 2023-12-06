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
/*
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
//Close-icon
const popupCloseIcon = document.querySelectorAll('close-popup');
if(popupCloseIcon.length > 0){
	for(let index; index < popupCloseIcon.length; index++){
		const el =popupCloseIcon[index];
		el.addEventListener("click", function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
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
	if (unlock) {
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
*/

/*
document.addEventListener('keydown', function (e){
	if (KeyboardEvent(e) == 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});
*/