export default class Difference {
    constructor(officer, items) {
        this.officer = document.querySelector(officer);
        this.items = this.officer.querySelectorAll(items);
        this.counter = 0;
    }

    bindTriggers() {
        this.items[this.items.length - 1].addEventListener('click', () => {
            if (this.counter == this.items.length - 2) {
                this.items[this.items.length - 1].remove();
                this.items[this.counter].style.display = 'flex';
                this.counter++;
            } else {
                this.items[this.counter].style.display = 'flex';
                this.counter++;
            }
        });
    }

    hideCards() {
        this.items.forEach((item, i, arr) => {
            item.classList.add('animated', 'fadeIn');
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }

    init() {
        this.hideCards();
        this.bindTriggers();
    }
}