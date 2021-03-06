import '../styles/styles.css';
// import Person from './modules/Person';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

//removed as part of code splitting as might not be needed
//import Modal from './modules/Modal';

if (module.hot) {
	module.hot.accept();
}

//removed as part of code splitting as might not be needed
//new Modal();
//as this isn't used / referred to anywhere else don't need a variable
//would need to be in a variable if the different modules were interacting
//let stickyHeader = new StickyHeader();
new StickyHeader();

//can reuse the same reveal class in this way
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);

//as this isn't used / referred to anywhere else don't need a variable
//let mobileMenu = new MobileMenu();
new MobileMenu();

let modal; //global scope

//Load modal code if called
document.querySelectorAll('.open-modal').forEach(el => {
	el.addEventListener('click', e => {
		e.preventDefault();
		//check if modal file has already been loaded
		if (typeof modal == 'undefined') {
			//this returns a promise so can use .then to see what to do next and .catch in case of problems
			//the comment in the function below dictates what webpack calls the file when it's loaded
			import(/* webpackChunkName: "modal" */ './modules/Modal')
				.then(x => {
					//x is the imported file and we need the .default due to how webpack will import it
					modal = new x.default();
					//open modal but give it 20ms to create object and inject html
					setTimeout(() => modal.openTheModal(), 20);
				})
				.catch(() => console.log('There was problem.'));
		} else {
			modal.openTheModal();
		}
	});
});

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
