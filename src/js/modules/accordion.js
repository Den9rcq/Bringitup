export default class Accordion {
    constructor(trigger) {
        this.trigger = document.querySelectorAll(trigger);
    }

    // Показ и скрытие сообщения
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