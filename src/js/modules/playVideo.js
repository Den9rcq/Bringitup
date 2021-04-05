export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.btnNext = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
    }

    // Открытие модального окна и создание плеера
    bindTriggers() {
        this.btnNext.forEach(btn => {
            btn.addEventListener('click', () => {

                if (document.querySelector('iframe#frame')) {
                    this.overlay.style.display = 'flex';                             //^ Показываем overlay
                } else {
                    const path = btn.getAttribute('data-url');                      //^ Находим url из дата атрибута
                    this.createPlayer(path);                                        //^ Создание плеера и открытие модального окна
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
        this.player = new YT.Player('frame', {                                  //^ id в вёрстке
            height: '100%',
            width: '100%',
            videoId: `${url}`,
        });

        console.log(this.player);

        this.overlay.style.display = 'flex';                                    //^ Показываем overlay
    }

    init() {
        // Добавление iframe api на страницу
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTriggers();
        this.bindCloseBtn();
    }
}