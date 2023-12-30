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
		popupActive.classList.add('close-animation');
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

	  // Видалення вікна після закінчення анімації
	  setTimeout(function () {
		 popupActive.classList.remove('close-animation');
	  }, timeout);
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