const headerBtn = document.querySelector('.header-info__btn button');
showModalForm(headerBtn, formTemplate);

// Кнопка "Подать заявку" в блоке pricePage, вызов модалки с формой
const pricePageBtn = document.querySelector('.pricepage__btn button');
showModalForm(pricePageBtn, formTemplate);

// Кнопка "Получить консультацию" fixed
const windowFormBtn = document.querySelector('.window__form-btn');
showModalForm(windowFormBtn, formTemplate);