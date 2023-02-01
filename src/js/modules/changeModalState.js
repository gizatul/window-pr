import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => { //получаем все типы данных, кот-е нужны для заполнения объекта
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');      
    //Валидация ширины и высоты(ввод только цифр)      
    checkNumInputs('#width');
    checkNumInputs('#height');

    

    
    function bindActionToElems(event, elem, prop) { //на опред. элемент(elem) навязывает опред. ОС(event) и записывает в опред. св-во объекта state
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) { //для пониманя нна какой элемент кликнул пользователь
                    case "SPAN": 
                        state[prop] = i; //выбор формы балкона
                        break;
                    case "INPUT":
                        if (item.getAttribute('type') === 'checkbox') { //если type="checkbox" в верстке 
                            i === 0 ? state[prop] = 'Cold' : state[prop] = 'Warm'; //если i=0 то будет присвоено объекту холод, иначе (т.е. i=1) будет присвоен (тепло)
                            elem.forEach((box, j) => { //ф-я для выбора только одного чекбокса
                                box.checked = false; //каждому чекбоксу устанавливаем снятие галочки
                                if (i == j) { //когда натыкаемся на тот чекбокс, кот-й чекнул пол-ль
                                    box.checked = true; //то второй чекбокс не отмечаем
                                }
                            });
                        } else {
                            state[prop] = item.value; //берем из инпута value
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value; //берем из инпута value
                        break;
                }
                console.log(state);
            });

        });
    }



    bindActionToElems('click', windowForm, 'form'); //вызов для сбора порядкого номера  формы балкона
    bindActionToElems('input', windowWidth, 'width'); //вызов ф-ии для сбора значений ширины
    bindActionToElems('input', windowHeight, 'height'); //вызов ф-ии для сбора значений высоты
    bindActionToElems('change', windowType, 'type'); //вызов ф-ии для сбора инфы
    bindActionToElems('change', windowProfile, 'profile'); //вызов ф-ии для сбора инфы

};
export default changeModalState;