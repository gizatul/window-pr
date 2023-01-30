import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');      
          
    checkNumInputs('#width');
    checkNumInputs('#height');
    
    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                if (elem.length > 1) { //если элементов в массиве больше 1, 
                    state[prop] = i; //то устанавливаем порядковый номер в объект state
                } else {
                    state[prop] = item.value; //если же элемент 1, то в объект передаем значение(value) инпута
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