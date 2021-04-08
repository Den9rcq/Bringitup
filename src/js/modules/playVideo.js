export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);                 //^ Жётско привязываем контекст вызова к методу
    }

    // Открытие модального окна и создание плеера
    bindTriggers() {
        this.btns.forEach((btn, i) => {
            try {
                const blockedElem = btn.closest('.module__video-item');

                if (i % 2 != 0) {
                    blockedElem.setAttribute('data-disabled', 'true');
                }
            } catch (e) { }


            btn.addEventListener('click', () => {
                if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {

                    this.activeBtn = btn;                                                    //^ Обозначаем активную кнопку

                    if (document.querySelector('iframe#frame')) {
                        this.overlay.style.display = 'flex';                                //^ Показываем overlay
                        if (this.path !== btn.getAttribute('data-url')) {                   //^ Если ли путь и кнопка на которую мы нажали не совпадают
                            this.path = btn.getAttribute('data-url');                       //^ Устанавливаем путь из кнопки на которую нажали
                            this.player.loadVideoById({ videoId: this.path });              //^ Обновляем путь и загружаем нужное видео
                        }
                    } else {
                        this.path = btn.getAttribute('data-url');                           //^ Находим url из дата атрибута
                        this.createPlayer(this.path);                                       //^ Создание плеера и открытие модального окна
                    }
                }
            });
        });
    }

    // Закрытие модального окна
    bindCloseBtn() {
        this.close.addEventListener('click', () => {
            this.overlay.style.display = 'none';
            this.player.stopVideo();
        });
    }

    // Создание плеера и открытие модального окна
    createPlayer(url) {
        this.player = new YT.Player('frame', {                                          //^ id в вёрстке
            height: '100%',
            width: '100%',
            videoId: `${url}`,
            events: {
                'onStateChange': this.onPlayerStateChange                               //^ Собыите, когда ролик закончился
            }
        });
        this.overlay.style.display = 'flex';                                            //^ Показываем overlay
    }

    onPlayerStateChange(state) {
        try {
            const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling,
                playBtn = this.activeBtn.querySelector('svg').cloneNode(true),                      //^ Глубокое копирование ноды
                playBtnCircle = blockedElem.querySelector('.play__circle'),
                playBtnText = blockedElem.querySelector('.play__text');

            if (state.data === 0) {                                                                 //^ Если видео закончилось
                if (playBtnCircle.classList.contains('closed')) {
                    playBtnCircle.classList.remove('closed');                                       //^ Удаляем класс
                    blockedElem.querySelector('svg').remove();                                      //^ Удаляем svg иконку
                    playBtnCircle.appendChild(playBtn);                                             //^ Добавляем клонированную svg

                    playBtnText.classList.remove('attention');                                      //^ Удаляем класс
                    playBtnText.textContent = 'play video';                                         //^ Изменяем текст

                    blockedElem.style.opacity = 1;                                                  //^ Убираем прозрачность
                    blockedElem.style.filter = 'none';                                              //^ Удаляем фильтр

                    blockedElem.setAttribute('data-disabled', 'false');                             //^ Разблокируем видео
                }
            }
        } catch (e) { }
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