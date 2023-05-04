'use strict'


const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};


const menuLinks = document.querySelectorAll('.menu__link--sub-menu');

const iconMenu = document.querySelector('.menu__icon');

if(iconMenu) {
  const menuBody = document.querySelector('.menu__body');

  iconMenu.addEventListener('click', function() {
    menuBody.classList.toggle('_open-menu');
    iconMenu.classList.toggle('_open-menu');
    document.body.classList.toggle('_lock');
  })
}

if (menuLinks.length > 0) {
  for (let i = 0; i < menuLinks.length; i++) {
    const menuLink = menuLinks[i];

    menuLink.addEventListener('click', function() {
    menuLink.parentElement.classList.toggle('_active');
    });
  }
}

if (isMobile.any()) {
  document.body.classList.add('_touch');

  
} else {
  document.body.classList.add('_pc');

  let subLists = document.querySelectorAll('.sub-list');

  if (subLists.length > 0) {
    for (let i = 0; i < subLists.length; i++) {
      const currentSubList = subLists[i];

      currentSubList.addEventListener('mouseover', function() {
        console.log(currentSubList);
        currentSubList.parentElement.classList.add('select');
      });
      currentSubList.addEventListener('mouseout', function() {
        console.log(currentSubList);
        currentSubList.parentElement.classList.remove('select');
      });
    }
  }
}

