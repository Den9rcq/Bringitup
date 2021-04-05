export default class Form {
    constructor(form) {
        this.forms = document.querySelectorAll(form);
        this.message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так...',
        };
        this.path = 'assets/question.php';
    }

    // Запрос и обработка данных с сервера
    async postResource(url, data) {
        const res = await fetch(`${url}`, {
            method: 'POST',
            body: data
        });

        if (!res.ok) {
            throw new Error(`Could not fetch: ${url}, status: ${res.status}`);
        }
        return await res.text();
    }


    // Запрет ввода кириллицы в поле Email
    chekTextInputs() {
        const emailInputs = document.querySelectorAll('[type="email"]');

        emailInputs.forEach(input => {
            input.addEventListener('keypress', function (e) {
                if (e.key.match(/[^a-z0-9@\.]/ig)) {
                    e.preventDefault();
                }
            });
        });
    }

    // Маска с номером телефона
    mask() {
        // Установка курсора
        let setCursorPosition = (pos, elem) => {
            elem.focus();

            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos); //^ Устанавливаем курсор после +7
            } else if (elem.createTextRange) { //^ Ручной полифил
                let range = elem.createTextRange();

                range.collapse(true); //^ Объединяет граничные точки деапозона
                range.moveEnd('character', pos); //^ Конечная точка выделения
                range.moveStart('character', pos); //^ Начальная точка выделения 
                range.select(); //^ Устанавливаем курсор
            }
        };

        // Масска номера телефона
        function createMask(event) {
            let matrix = '+1 (___) ___-____', //^ Создаём маску
                i = 0,
                def = matrix.replace(/\D/g, ''), //^ Статичная строка работает на основе matrix
                val = this.value.replace(/\D/g, ''); //^ Динамичная строка на основе ввода пользователя

            if (def.length >= val.length) { //^ Непозволяем удалять +7
                val = def;
            }

            this.value = matrix.replace(/./g, function (a) { //!
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });

            // Скрытие маски, если пользователь ничего не ввёл и установка курсора
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
            form.addEventListener('submit', (e) => {
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

                this.postResource(this.path, formData)
                    .then(data => {
                        console.log(data);
                        statusMessage.textContent = this.message.success;
                    })
                    .catch(err => {
                        statusMessage.textContent = this.message.failure;
                    })
                    .finally(() => {
                        form.reset();
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 5000);
                    });
            });
        });
    }
}