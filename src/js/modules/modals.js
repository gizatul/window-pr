const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector), //кнопка вызова окна
              modal = document .querySelector(modalSelector), // модал окно
              close = document.querySelector(closeSelector); // закрытие окна

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault(); // отмена стандартного поведения браузера(если вдруг внутри ссылка, браузер по умол. перезагружает страницу)
                }
                modal.style.display = 'block'; // появление окна
                document.body.style.overflow = 'hidden'; //блок прокрутки
            });
        });
        close.addEventListener('click', () => {
            modal.style.display = 'none'; //скрытие окна
            document.body.style.overflow = ''; //восстановление прокрутки
        });
        modal.addEventListener('click', (e) => { //закрытие при клике на подложку
            if (e.target === modal) {
                modal.style.display = 'none'; //скрытие окна
                document.body.style.overflow = ''; //восстановление прокрутки  
            }
        })
    }

    function showModalByTime(selector, time) { //показ окна спустя время
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }
    
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup', 5000);
};
export default modals;