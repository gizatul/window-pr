const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector), //кнопка вызова окна
              modal = document .querySelector(modalSelector), // модал окно
              close = document.querySelector(closeSelector), // закрытие окна
              windows = document.querySelectorAll('[data-modal]'); // получаем все модальные окна чтобы их потом закрыть

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault(); // отмена стандартного поведения браузера(если вдруг внутри ссылка, браузер по умол. перезагружает страницу)
                }
                windows.forEach(item => { 
                    item.style.display = 'none'; //закрытие всех окон при нажатии "Далее" (сделано для калькулятора)
                });

                modal.style.display = 'block'; // появление окна
                document.body.style.overflow = 'hidden'; //блок прокрутки
            });
        });
        close.addEventListener('click', () => {
            modal.style.display = 'none'; //скрытие окна
            document.body.style.overflow = ''; //восстановление прокрутки
            windows.forEach(item => { 
                item.style.display = 'none'; //закрытие всех окон при нажатии на крестик(сделано для калькулятора)
            });
        });
        modal.addEventListener('click', (e) => { //закрытие при клике на подложку
            if (e.target === modal && closeClickOverlay) {// Если клик на подложку и параметр true, то ф-я ниже выполнится. closeClickOverlay мы специально искуственно создали чтобы контролировать какие именно окна закрывать с помощью клика на подложку
                windows.forEach(item => { 
                    item.style.display = 'none'; //закрытие всех окон при нажатии на подложку
                });
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
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false); //вызов ф-ии модал окна калькулятора
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    // showModalByTime('.popup', 5000);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
};
export default modals;