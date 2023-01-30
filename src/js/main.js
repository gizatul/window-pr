import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    let modalState = {}; //состояние модал окна с калькулятором

    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active'); //табы для "ОСТЕКЛЕНИЕ БАЛКОНОВ И ЛОДЖИЙ"
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click'); //.decoration_content > div > div - указание на прямых потомков, табы для "отделок"
    forms();
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    changeModalState(modalState);



});