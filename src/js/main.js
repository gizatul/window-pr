import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    let modalState = {
        form: 0,
        type: 'tree',
    }; //состояние модал окна с калькулятором
    let deadline = '2023-05-01 00:00:00';

    changeModalState(modalState); //передаем ссылку на объект modalstate
    modals(modalState);
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active'); //табы для "ОСТЕКЛЕНИЕ БАЛКОНОВ И ЛОДЖИЙ"
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click'); //.decoration_content > div > div - указание на прямых потомков, табы для "отделок"
    forms(modalState);
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    timer('.container1', deadline);
    images();



});