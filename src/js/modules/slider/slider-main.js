import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(btnNext, btnPrev) {
        super(btnNext, btnPrev);
    }

    // ~ Показ слайда
    showSlides(n) {
        try {
            if (n > this.slides.length) {
                this.slideIndex = 1;
            }

            if (n < 1) {
                this.slideIndex = this.slides.length;
            }

            // Показ блока через 3 секунды

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
        [...this.slides].forEach(slide => {                                 //^ [...] - Чтобы превратить HTMLCollection в массив 
            slide.style.display = 'none';
        });

        // for (let i = 0; i < this.slides.length; i++) {
        //     this.slides[i].style.display = 'none';
        // }

        // Показываем текущий слайд
        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    // ~ Изменение слайда
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }


    bindTriggers(directionBtn, n) {
        // Меняем слайд нажатием на кнопку
        directionBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlides(n);
            });

            // Переходим к первому слайду, нажатием на логотип
            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();

                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });
    }


    // & 
    render() {
        if (this.container) {
            // Поиск элемента на странице, для его показа через 3 секунды
            try {
                this.hanson = document.querySelector('.hanson');
            } catch (e) { }

            // Перелистование слайдера
            this.bindTriggers(this.btnNext, 1);
            this.bindTriggers(this.btnPrev, -1);

            // Первичная иницилизация
            this.showSlides(this.slideIndex);
        }
    }
}