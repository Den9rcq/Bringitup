export default class Slider {
	constructor({
		container = null,
		btns = null,
		next = null,
		prev = null,
		activeClass = "",
		animate,
		autoplay
	} = {}) {
		this.container = document.querySelector(container);
		this.slides = this.container.children;				//^ Каждый блок внутри page
		this.btns = document.querySelectorAll(btns);
		this.prev = document.querySelector(prev);
		this.next = document.querySelector(next);
		this.activeClass = activeClass;
		this.animate = animate;
		this.autoplay = autoplay;
		this.slideIndex = 1;
	}
}