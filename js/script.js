import tabs from './modules/tabs'
import modal from './modules/modal'
import timer from './modules/timer'
import cards from './modules/cards'
import calc from './modules/calc'
import form from './modules/form'
import slider from './modules/slider'
import {
	openModal
} from './modules/modal'



window.addEventListener("DOMContentLoaded", () => {
	const modalTimerId = setTimeout(() => openModal(modalSelector, modalTimerId), 30000)

	tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
	modal("[data-modal]", ".modal", modalTimerId)
	timer('.timer', "2021-09-11")
	cards()
	calc()
	form('form', modalTimerId)
	slider({
		container: '.offer__slider',
		slide: '.offer__slide',
		nextArrow: '.offer__slider-next',
		prevArrow: '.offer__slider-prev',
		totalCounter: '#total',
		currentCounter: '#current',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slider-inner'
	});
// slider деструктиризация
});