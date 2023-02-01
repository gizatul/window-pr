import checkNumInputs from "./checkNumInputs";

const forms = (state) => {

    const form = document.querySelectorAll('form'),
          windows = document.querySelectorAll('[data-modal]'),
          inputs = document.querySelectorAll('input');
    
    //Введение в поле с телефоном только цифр
    checkNumInputs('input[name="user_phone"]');

    //Ф-я для очищения полей
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    }

    //создание объекта с сообщениями
    const message = { 
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...',
    };
    //Создаем ф-ю отправки данных
    const postData = async (url, data) => { //асинхронная ф-я - async
        document.querySelector('.status').textContent = message.loading; //добавляем плашку о загрузке пока идет обработка запроса
        let res = await fetch(url, { //асинхронная операция await, чтобы JS дождался выполнения операции, т.к. ответ от сервера может идти долго
            method: 'POST',
            body: data,
        });
        return await res.text(); //возврат текстовых данных(в данном случае, тоже ждем окончания операции (await)
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault(); //отмена перезагрузки страницы
            //Создание блока с статусом запроса
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
            // создание формдаты для отправки на сервер
            const formData = new FormData(item);

            if (item.getAttribute('data-calc') === 'end') {  //проверка на необходимую нам форму(в данном случае калькулятор) - берем ту форму где кнопка рассчитать стоимость
                for (let key in state) {
                    formData.append(key, state[key]); //добавление (append) к стандартной форме formData(имени телефону) остальных данных с каалькулятора
                }
                
            }
            //Выведение сообщений на страницу
            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success; //плашка об успешности
                })
                .catch(() => statusMessage.textContent = message.failure) //плашка о неудаче
                .finally(() => {
                    clearInputs(); //очищение полей после успешной/неуспешной отправки
                    setTimeout(() => {
                        statusMessage.remove(); //удаляем сообщение через 10 сек
                    }, 10000);
                    windows.forEach(item => {
                        item.style.display = 'none'; //закрытие всех окон после отправки/неотправки данных
                    });
                    for (let key in state) {
                        delete state[key]; //очищение объекта
                    }
                }); 
        });
    });
};
export default forms;

