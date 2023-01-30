const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);
    //Ф-я скрытия контента и снятие активности класса
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }
    //Ф-я показа контента и добавления активного класса
    function showTabContent(i = 0) {
        content[i].style.display = display; //по умол будет display=block
        tab[i].classList.add(activeClass);
    }
    //Иницилизируем ф-ии
    hideTabContent();
    showTabContent();
    //Отслеживание на какой таб нажал пользователь
    header.addEventListener('click', (e) => {
        if (e.target &&
             (e.target.classList.contains(tabSelector.replace(/\./, "")) || //убираем точку с помощью регулярного выражения замены(replace)
        e.target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) { //*1
            tab.forEach((item, i) => { //Определение порядка на который кликнули, item-каждый отдельный элемент, кот-й перебираем
                if (e.target == item || e.target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};
export default tabs;

/*1 В переменной target находится объект события - e, который приходит при клике на header (то есть на шапку табов) и мы проверяем, есть ли у этой цели на которую кликнули (target) класс tabSelector, в случае с блоком таба у него этот селектор будет, но ведь мы можем нажать и на просто картинку и на описание внутри самого блока таба и в таком случае нужно проверить их родителя, есть ли у него класс tabSelector) ведь по-факту картинка или описание таба не имеют класса tabSelector*/