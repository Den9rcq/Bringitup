export default class Slider {
	constructor(page, btns) {
		this.page = document.querySelector(page);
		this.slides = [...this.page.children];				//^ Каждый блок внутри page 	[...] - Чтобы превратить HTMLCollection в массив 
		this.btns = document.querySelectorAll(btns);
		this.slideIndex = 1;
	}

	// ~ Показ слайда
	showSlides(n) {
		if (n > this.slides.length) {
			this.slideIndex = 1;
		}

		if (n < 1) {
			this.slideIndex = this.slides.length;
		}

		// Показ блока через 3 секунды
		try {
			this.hanson.style.opacity = 0;
			if (n === 3) {
				this.hanson.classList.add('animated');

				setTimeout(() => {
					this.hanson.style.opacity = '1';
					this.hanson.classList.add('slideInUp');
				}, 3000);
			} else {
				this.hanson.classList.remove('slideInUp');
			}
		} catch (e) { }



		// Скрываем все слайды
		this.slides.forEach(slide => {
			slide.style.display = 'none';
		});

		// for (let i = 0; i < this.slides.length; i++) {
		// 	this.slides[i].style.display = 'none';
		// }

		// Показываем текущий слайд
		this.slides[this.slideIndex - 1].style.display = 'block';
	}

	// ~ Изменение слайда
	plusSlides(n) {
		this.showSlides(this.slideIndex += n);
	}



	// & 
	render() {
		// Поиск элемента на странице, для его показа через 3 секунды
		try {
			this.hanson = document.querySelector('.hanson');
		} catch (e) { }

		// Меняем слайд нажатием на кнопку
		this.btns.forEach(btn => {
			btn.addEventListener('click', () => {
				this.plusSlides(1);
			});

			// Переходим к первому слайду, нажатием на логотип
			btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
				e.preventDefault();

				this.slideIndex = 1;
				this.showSlides(this.slideIndex);
			});
		});


		// Первичная иницилизация
		this.showSlides(this.slideIndex);
	}
}