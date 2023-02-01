import calcScroll from "./calcScroll";
const images = () => {
    const imgPopup = document.createElement('div'), // создание модал окна для изображения
          workSection = document.querySelector('.works'), //секция в кот-й находятся изображения, для последующей обработки в ОС ч/з делегирование
          bigImage = document.createElement('img'); //создание большого изображения
          scroll = calcScroll();
          //Дорабатываем модал окно
          imgPopup.classList.add('popupImg'); //используем уже имеющийся класс popup с полупрозрачной подложкой
          workSection.appendChild(imgPopup); //в секцию внутрь размещаем модал окно
          imgPopup.style.cssText = `
          display:none;
          justify-content:center;
          align-items:center;` // стилизуем изображение
          
          bigImage.style.maxHeight = '90vh';//Высота будет макс 90% от видимой области
          bigImage.style.maxWidth = '90vw'; //ширина будет макс 90% от видимой области
          bigImage.classList.add('faded');

          imgPopup.appendChild(bigImage); //в модал окно размещаем изображение
          //Ф-я для показа рис
          workSection.addEventListener('click', (e) => {
            e.preventDefault(); //отмена станд поведения браузера
            if (e.target && e.target.classList.contains('preview')) { //preview -class у мини рис
                imgPopup.style.display = 'flex'; //показ модал окна
            const path = e.target.parentNode.getAttribute('href'); //вытаскиваем содержание href (т.е ссылку на больш рис) родителя preview
                bigImage.setAttribute('src', path); //устанавливаем ссылку созданному большому рисунку
                document.body.style.overflow = 'hidden'; //блокировка прокрутки
                document.body.style.marginRight = `${scroll}px`;
            }
            if (e.target && e.target === imgPopup) { //при нажатии на подложку закрываем
                imgPopup.style.display = 'none';  //
                document.body.style.overflow = ''; //восстановление прокрутки
                document.body.style.marginRight = `0px`;
            }

          });
}
export default images;