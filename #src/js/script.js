// Данные блоков
@@include('./data.js');

// Functions
@@include('./plugins/modalWindow/modalWindow.js');

@@include('./plugins/contactForm/lib/datapickerJs/datepicker.js');
@@include('./plugins/contactForm/lib/moment/moment.min.js');
@@include('./elements/elementInfoList.js');
@@include('./elements/elementBodyCard.js');
@@include('./blocks/whatIsFranchise.js');
@@include('./elements/elementPricePageList.js');
@@include('./blocks/pricePage.js');
@@include('./elements/elementPricePageBlocks.js');
@@include('./blocks/dopPage.js');
@@include('./elements/elementContacts.js');
@@include('./plugins/contactForm/contactForm.js');

// Создание объектов
@@include('./callTemplates.js');

// Подключение слушателей для анимации элементов
@@include('./callEvents.js');

// Подключение кнопок
@@include('./buttons.js');
