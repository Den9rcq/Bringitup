/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider/slider-main */ "./src/js/modules/slider/slider-main.js");
/* harmony import */ var _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider/slider-mini */ "./src/js/modules/slider/slider-mini.js");
/* harmony import */ var _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/playVideo */ "./src/js/modules/playVideo.js");
/* harmony import */ var _modules_difference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/difference */ "./src/js/modules/difference.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");






window.addEventListener('DOMContentLoaded', () => {
  const slider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    btnNext: '.next',
    container: '.page'
  });
  slider.render();
  const modulePageSlider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    container: '.moduleapp',
    btnNext: '.next',
    btnPrev: '.prev'
  });
  modulePageSlider.render();
  const showUpSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: 'card-active',
    animate: true
  });
  showUpSlider.init();
  const modulesSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.modules__content-slider',
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true
  });
  modulesSlider.init();
  const feedSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.feed__slider',
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next',
    activeClass: 'feed__item-active'
  });
  feedSlider.init();
  new _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__["default"]('.showup .play', '.overlay').init();
  new _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__["default"]('.module__video-item .play', '.overlay').init();
  const officerOld = new _modules_difference__WEBPACK_IMPORTED_MODULE_3__["default"]('.officerold', '.officer__card-item');
  officerOld.init();
  const officerNew = new _modules_difference__WEBPACK_IMPORTED_MODULE_3__["default"]('.officernew', '.officer__card-item');
  officerNew.init();
  new _modules_form__WEBPACK_IMPORTED_MODULE_4__["default"]('.form').init();
  new _modules_accordion__WEBPACK_IMPORTED_MODULE_5__["default"]('.plus').init();
});

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
class Accordion {
  constructor(trigger) {
    this.trigger = document.querySelectorAll(trigger);
  } // Показ и скрытие сообщения


  toggleMessage(message) {
    message.classList.add('animated');

    if (message.style.display !== 'flex') {
      message.classList.remove('fadeOut');
      message.classList.add('fadeIn');
      message.style.display = 'flex';
    } else {
      message.classList.remove('fadeIn');
      message.classList.add('fadeOut');
      setTimeout(() => {
        message.style.display = 'none';
      }, 600);
    }
  }

  init() {
    // Событие при клике
    this.trigger.forEach(btn => {
      btn.addEventListener('click', () => {
        this.message = btn.closest('.module__info-show').nextElementSibling;
        this.toggleMessage(this.message);
      });
    });
  }

}

/***/ }),

/***/ "./src/js/modules/difference.js":
/*!**************************************!*\
  !*** ./src/js/modules/difference.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Difference; });
class Difference {
  constructor(officer, items) {
    this.officer = document.querySelector(officer);

    try {
      this.items = this.officer.querySelectorAll(items);
    } catch (e) {}

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
    try {
      this.hideCards();
      this.bindTriggers();
    } catch (e) {}
  }

}

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
class Form {
  constructor(form) {
    this.forms = document.querySelectorAll(form);
    this.message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся',
      failure: 'Что-то пошло не так...'
    };
    this.path = 'assets/question.php';
  } // Запрос и обработка данных с сервера


  async postResource(url, data) {
    const res = await fetch(`${url}`, {
      method: 'POST',
      body: data
    });

    if (!res.ok) {
      throw new Error(`Could not fetch: ${url}, status: ${res.status}`);
    }

    return await res.text();
  } // Запрет ввода кириллицы в поле Email


  chekTextInputs() {
    const emailInputs = document.querySelectorAll('[type="email"]');
    emailInputs.forEach(input => {
      input.addEventListener('keypress', function (e) {
        if (e.key.match(/[^a-z0-9@\.]/ig)) {
          e.preventDefault();
        }
      });
    });
  } // Маска с номером телефона


  mask() {
    // Установка курсора
    let setCursorPosition = (pos, elem) => {
      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos); //^ Устанавливаем курсор после +7
      } else if (elem.createTextRange) {
        //^ Ручной полифил
        let range = elem.createTextRange();
        range.collapse(true); //^ Объединяет граничные точки деапозона

        range.moveEnd('character', pos); //^ Конечная точка выделения

        range.moveStart('character', pos); //^ Начальная точка выделения 

        range.select(); //^ Устанавливаем курсор
      }
    }; // Масска номера телефона


    function createMask(event) {
      let matrix = '+1 (___) ___-____',
          //^ Создаём маску
      i = 0,
          def = matrix.replace(/\D/g, ''),
          //^ Статичная строка работает на основе matrix
      val = this.value.replace(/\D/g, ''); //^ Динамичная строка на основе ввода пользователя

      if (def.length >= val.length) {
        //^ Непозволяем удалять +7
        val = def;
      }

      this.value = matrix.replace(/./g, function (a) {
        //!
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      }); // Скрытие маски, если пользователь ничего не ввёл и установка курсора

      if (event.type === 'blur') {
        if (this.value.length == 2) {
          this.value = '';
        }
      } else {
        setCursorPosition(this.value.length, this);
      }
    }

    let inputs = document.querySelectorAll('[name=phone]');
    inputs.forEach(input => {
      input.addEventListener('input', createMask);
      input.addEventListener('focus', createMask);
      input.addEventListener('blur', createMask);
    });
  }

  init() {
    this.chekTextInputs();
    this.mask();
    this.forms.forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = `
                    display: flex;
                    margin-top: 10px;
                    color: red;
                `;
        form.parentNode.appendChild(statusMessage);
        statusMessage.textContent = this.message.loading;
        let formData = new FormData(form);
        this.postResource(this.path, formData).then(data => {
          console.log(data);
          statusMessage.textContent = this.message.success;
        }).catch(err => {
          statusMessage.textContent = this.message.failure;
        }).finally(() => {
          form.reset();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
      });
    });
  }

}

/***/ }),

/***/ "./src/js/modules/playVideo.js":
/*!*************************************!*\
  !*** ./src/js/modules/playVideo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this); //^ Жётско привязываем контекст вызова к методу
  } // Открытие модального окна и создание плеера


  bindTriggers() {
    this.btns.forEach((btn, i) => {
      try {
        const blockedElem = btn.closest('.module__video-item');

        if (i % 2 != 0) {
          blockedElem.setAttribute('data-disabled', 'true');
        }
      } catch (e) {}

      btn.addEventListener('click', () => {
        if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
          this.activeBtn = btn; //^ Обозначаем активную кнопку

          if (document.querySelector('iframe#frame')) {
            this.overlay.style.display = 'flex'; //^ Показываем overlay

            if (this.path !== btn.getAttribute('data-url')) {
              //^ Если ли путь и кнопка на которую мы нажали не совпадают
              this.path = btn.getAttribute('data-url'); //^ Устанавливаем путь из кнопки на которую нажали

              this.player.loadVideoById({
                videoId: this.path
              }); //^ Обновляем путь и загружаем нужное видео
            }
          } else {
            this.path = btn.getAttribute('data-url'); //^ Находим url из дата атрибута

            this.createPlayer(this.path); //^ Создание плеера и открытие модального окна
          }
        }
      });
    });
  } // Закрытие модального окна


  bindCloseBtn() {
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      this.player.stopVideo();
    });
  } // Создание плеера и открытие модального окна


  createPlayer(url) {
    this.player = new YT.Player('frame', {
      //^ id в вёрстке
      height: '100%',
      width: '100%',
      videoId: `${url}`,
      events: {
        'onStateChange': this.onPlayerStateChange //^ Собыите, когда ролик закончился

      }
    });
    this.overlay.style.display = 'flex'; //^ Показываем overlay
  }

  onPlayerStateChange(state) {
    try {
      const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling,
            playBtn = this.activeBtn.querySelector('svg').cloneNode(true),
            //^ Глубокое копирование ноды
      playBtnCircle = blockedElem.querySelector('.play__circle'),
            playBtnText = blockedElem.querySelector('.play__text');

      if (state.data === 0) {
        //^ Если видео закончилось
        if (playBtnCircle.classList.contains('closed')) {
          playBtnCircle.classList.remove('closed'); //^ Удаляем класс

          blockedElem.querySelector('svg').remove(); //^ Удаляем svg иконку

          playBtnCircle.appendChild(playBtn); //^ Добавляем клонированную svg

          playBtnText.classList.remove('attention'); //^ Удаляем класс

          playBtnText.textContent = 'play video'; //^ Изменяем текст

          blockedElem.style.opacity = 1; //^ Убираем прозрачность

          blockedElem.style.filter = 'none'; //^ Удаляем фильтр

          blockedElem.setAttribute('data-disabled', 'false'); //^ Разблокируем видео
        }
      }
    } catch (e) {}
  }

  init() {
    if (this.btns.length > 0) {
      // Добавление iframe api на страницу
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      this.bindTriggers();
      this.bindCloseBtn();
    }
  }

}

/***/ }),

/***/ "./src/js/modules/slider/slider-main.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-main.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(btnNext, btnPrev) {
    super(btnNext, btnPrev);
  } // ~ Показ слайда


  showSlides(n) {
    try {
      if (n > this.slides.length) {
        this.slideIndex = 1;
      }

      if (n < 1) {
        this.slideIndex = this.slides.length;
      } // Показ блока через 3 секунды


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
    } catch (e) {} // Скрываем все слайды


    [...this.slides].forEach(slide => {
      //^ [...] - Чтобы превратить HTMLCollection в массив 
      slide.style.display = 'none';
    }); // for (let i = 0; i < this.slides.length; i++) {
    //     this.slides[i].style.display = 'none';
    // }
    // Показываем текущий слайд

    this.slides[this.slideIndex - 1].style.display = 'block';
  } // ~ Изменение слайда


  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  bindTriggers(directionBtn, n) {
    // Меняем слайд нажатием на кнопку
    directionBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        this.plusSlides(n);
      }); // Переходим к первому слайду, нажатием на логотип

      btn.parentNode.previousElementSibling.addEventListener('click', e => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });
  } // & 


  render() {
    if (this.container) {
      // Поиск элемента на странице, для его показа через 3 секунды
      try {
        this.hanson = document.querySelector('.hanson');
      } catch (e) {} // Перелистование слайдера


      this.bindTriggers(this.btnNext, 1);
      this.bindTriggers(this.btnPrev, -1); // Первичная иницилизация

      this.showSlides(this.slideIndex);
    }
  }

}

/***/ }),

/***/ "./src/js/modules/slider/slider-mini.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-mini.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MiniSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(container, next, prev, activeClass, animate, autoplay) {
    super(container, next, prev, activeClass, animate, autoplay);
  }

  decorizeSlides() {
    if (this.activeClass !== '') {
      // Удаляем активый класс
      [...this.slides].forEach(slide => {
        slide.classList.remove(this.activeClass);

        if (this.animate) {
          slide.querySelector('.card__title').style.opacity = '0.4';
          slide.querySelector('.card__controls-arrow').style.opacity = '0';
        }
      }); // Добавляем активный класс

      if (!this.slides[0].closest('button')) {
        this.slides[0].classList.add(this.activeClass);
      }

      if (this.animate) {
        this.slides[0].querySelector('.card__title').style.opacity = '1';
        this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
      }
    }
  } // Перелистываем слайды


  bindTriggers() {
    this.next.addEventListener('click', () => this.nextSlide());
    this.prev.addEventListener('click', () => {
      for (let i = this.slides.length - 1; i > 0; i--) {
        if (this.slides[i].tagName !== "BUTTON") {
          let active = this.slides[i];
          this.container.insertBefore(active, this.slides[0]);
          this.decorizeSlides();
          break;
        }
      }
    });
  }

  nextSlide() {
    if (this.slides[1].tagName == "BUTTON" && this.slides[2].tagName == "BUTTON") {
      this.container.appendChild(this.slides[2]); // Btn

      this.container.appendChild(this.slides[1]); // Btn

      this.container.appendChild(this.slides[0]); // Slide

      this.decorizeSlides();
    } else {
      this.container.appendChild(this.slides[0]);
      this.decorizeSlides();
    }
  } // Автоматический запуск и остановка слайдера


  stopPlaySlide() {
    const paused = setInterval(() => this.nextSlide(), 5000);
    this.container.addEventListener('mouseenter', () => {
      clearInterval(paused);
    });
    this.container.addEventListener('mouseleave', () => {
      this.stopPlaySlide();
    });
  }

  init() {
    try {
      this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;
      this.bindTriggers();
      this.decorizeSlides();

      if (this.autoplay) {
        this.stopPlaySlide();
      }
    } catch (e) {}
  }

}

/***/ }),

/***/ "./src/js/modules/slider/slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider/slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
class Slider {
  constructor({
    container = null,
    btnNext = null,
    btnPrev = null,
    next = null,
    prev = null,
    activeClass = "",
    animate,
    autoplay
  } = {}) {
    this.container = document.querySelector(container);

    try {
      this.slides = this.container.children;
    } catch (e) {} //^ Каждый блок внутри page


    this.btnNext = document.querySelectorAll(btnNext);
    this.btnPrev = document.querySelectorAll(btnPrev);
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;
  }

}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map