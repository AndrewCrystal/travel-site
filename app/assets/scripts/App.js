import '../styles/styles.css';
// import Person from './modules/Person';
import MobileMenu from './modules/MobileMenu';

if (module.hot) {
	module.hot.accept();
}

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
