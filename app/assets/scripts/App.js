import '../styles/styles.css';
// import Person from './modules/Person';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

if (module.hot) {
	module.hot.accept();
}

//can reuse the same reveal class in this way
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);

let mobileMenu = new MobileMenu();

/* Lesson example code below this line */

// class Adult extends Person {
// 	payTaxes() {
// 		console.log(this.name + ' now owes zero taxes.');
// 	}
// }

// let john = new Person('Fred', 'red');
// john.greet();

// let jayne = new Adult('Jayne', 'pink');
// jayne.greet();
// jayne.payTaxes();
