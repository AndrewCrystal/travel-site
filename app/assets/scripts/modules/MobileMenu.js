class MobileMenu {
	constructor() {
		//alert('Testing from MobileMenu.');
		//this is the old way and NOT the way to do it - it's combining 3 things - selecting from DOM, event handling and defining functionality - can be very messy on more complex stuff
		// document.querySelector('.site-header__menu-icon').addEventListener('click', function() {
		// 	console.log('The top right icon was clicked.');
		// });
		this.menuIcon = document.querySelector('.site-header__menu-icon');
		this.menuContent = document.querySelector('.site-header__menu-content');
		this.siteHeader = document.querySelector('.site-header');
		this.events();
	}

	events() {
		//arrow function used as doesn't manipulate the this part and change it
		this.menuIcon.addEventListener('click', () => this.toggleTheMenu());
	}

	toggleTheMenu() {
		//console.log('Icon clicked');
		this.menuContent.classList.toggle('site-header__menu-content--is-visible');
		this.siteHeader.classList.toggle('site-header--is-expanded');
		this.menuIcon.classList.toggle('site-header__menu-icon--close-x');
	}
}

export default MobileMenu;
