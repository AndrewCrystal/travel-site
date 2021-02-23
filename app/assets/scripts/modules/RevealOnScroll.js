import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class RevealOnScroll {
	constructor(els, thresholdPercent) {
		this.thresholdPercent = thresholdPercent;
		this.itemsToReveal = els;
		this.browserHeight = window.innerHeight;
		this.hideInitially();
		this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
		this.events();
	}

	events() {
		//debounce used to stop constant resize events - only fires 333ms after resizing has stopped
		window.addEventListener('scroll', this.scrollThrottle);
		window.addEventListener(
			'resize',
			debounce(() => {
				console.log('Resize just ran');
				this.browserHeight = window.innerHeight;
			}, 333)
		);
	}

	calcCaller() {
		console.log('scroll function ran');
		this.itemsToReveal.forEach(el => {
			if (el.isRevealed == false) {
				this.calculateIfScrolledTo(el);
			}
		});
	}

	calculateIfScrolledTo(el) {
		//only run scroll if we are getting to the top edge of the element
		if (window.scrollY + this.browserHeight > el.offsetTop) {
			console.log('Element was calculated');
			let scrollPercent = el.getBoundingClientRect().top / this.browserHeight * 100;
			//the 75 here really means once an element is 25% into the browser viewport from the bottom - changed to var to make more flexible for each element it's called on
			if (scrollPercent < this.thresholdPercent) {
				el.classList.add('reveal-item--is-visible');
				el.isRevealed = true;
				if (el.isLastItem) {
					window.removeEventListener('scroll', this.scrollThrottle);
				}
			}
		}
	}

	hideInitially() {
		this.itemsToReveal.forEach(el => {
			el.classList.add('reveal-item');
			el.isRevealed = false;
		});
		//add a property to the last item in the array
		this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
	}
}

export default RevealOnScroll;
