export default class Download {
    constructor(triggers) {
        this.btn = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg';
    }

    downloadItem(path) {
        const link = document.createElement('a');               //^ Создаём ссылку на странтце

        link.setAttribute('href', path);                        //^ Устанавливаем ему атрибуд пути к файлу
        link.setAttribute('download', 'nice_picture');          //^ Устанавливаем атрибут для скачивания и название файла

        link.style.display = 'none';                            //^ Убираем видимость элемента со страницы

        document.body.appendChild(link);                        //^ Добавляем элемент на страницу
        link.click();                                           //^ Автоматически кликаем на элемент

        document.body.removeChild(link);                        //^ Удаляем элемент со страницы
    }

    init() {
        this.btn.forEach(item => {
            item.style.cursor = 'pointer';                      //^ Показываем обозначение курсора
            item.addEventListener('click', (e) => {
                e.stopPropagation();                            //^ Убираем баг с перепрыгиванием на первую страницу
                this.downloadItem(this.path);
            });
        });
    }
}