const forms = () => {
    const form = document.querySelectorAll('form'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]'); //получаем инпуты с телефоном
    
    //Введение в поле с телефоном только цифр
    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, ''); //при введении не цифр ввводится пустая строка
        });
    });
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
            //Выведение сообщений на страницу
            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success; //плашка об успешности
                })
                .catch(() => statusMessage.textContent = message.failure) //плашка о неудаче
                .finally(() => {
                    item.reset();
                    setTimeout(() => {
                        statusMessage.remove(); //удаляем сообщение через 10 сек
                    }, 10000);
                }); //очищение полей после успешной/неуспешной отправки
        });
    });
};
export default forms;

