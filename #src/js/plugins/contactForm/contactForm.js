$(function() {
    //ДЛЯ КАЖДОГО ДАТАПИКЕРА НЕОБХОДИМО:
    //---Начало создание дата пикеров

    // добавить его флаг для валидации
    // изначальное состояние валидности поля
    // если дата имеет атрибут required(обязательная), то выставляем false, если необязательная то true
    var validDates = {
        field_14: true
    };

    // в массив добавляем name всех датапикеров
    var dateType = ['field_14'];

    //создать сам датапикер в аргументе указывая его id
    createDataPicker('field_14');

    // пример когда у нас два поля типа "Дата"
    // например есть поле field_14 и нам надо добавить ещё одно field_22
    // тогда подключение датапикеров будет выглядеть следующим образом

    /*  var validDates = {
        field_14: false,
        field_22: false
    };

    var dateType = ['field_14', field_22];

    createDataPicker('field_14');
    createDataPicker('field_22');
    */

    //---Конец создание дата пикеров

    // типы элементов которые будут валидироваться
    var validationType = ['text', 'textarea', 'number', 'email'];

    var isValidForm = false;
    var form = document.getElementById('myForm');
    var sendFormBtn = document.getElementById('sendForm');

    // true, если блока "Я согласен с документами" не будет
    // false, если блок будет
    var isIAgree = true;

    function createDataPicker(id) {
        new Datepicker('#' + id, {
            onChange: function (date) {
                return checkDateValid(event, date)
            }
        });
    }

    // задаём события для проверки валидации
    for (var i = 0; i < form.length; i++) {
        if (validationType.indexOf(form[i].type) !== -1) {
            form[i].onblur = checkValid;
            //form[i].oninput = checkValid;
        }
    }

    // проверка валидации всей формы
    // по результату выполнения блочитт или дизблочит кнопку отправки формы
    function checkValidAll() {
        isValidForm = true;
        for (var i = 0; i < form.length; i++) {
            if (!form[i].checkValidity()) {
                isValidForm = false;
                break;
            }
        }

        var dateValid = true;

        if (validDates) {
            for(var property in validDates) {
                if (!validDates[property]) {
                    dateValid = false;
                    break;
                }
            }
        }

        sendFormBtn.disabled = !isValidForm || !dateValid || !isIAgree;
    }

    // проверка валидации конкретного поля и установка или затерание ошибки
    function checkValid(event) {
        if (event) {
            var evInput = event.currentTarget;
            var errorBlock = document.getElementById(evInput.name + "-error");
            //общая валидация
            if (evInput.checkValidity()) {
                //доп валидация даты
                if (dateType.indexOf(evInput.name) + 1) {
                    if (evInput.value === '' || moment(evInput.value, 'DD.MM.YYYY', true).isValid()) {
                        errorBlock.innerText = '';
                        evInput.classList.remove('error-border');
                        validDates[evInput.name] = true;
                    } else {
                        errorBlock.innerText = 'Некорректный формат';
                        evInput.classList.add('error-border');
                        validDates[evInput.name] = false;
                    }
                } else {
                    errorBlock.innerText = '';
                    evInput.classList.remove('error-border');
                }
            } else {
                errorBlock.innerText = evInput.title ? evInput.title : evInput.validationMessage;
                evInput.classList.add('error-border');
            }
            checkValidAll();
        }
    }

    // доп валидация даты при выборе её в датапикере
    function checkDateValid(event, date) {
        if (event && date) {
            var evInput = event.currentTarget.tagName === 'DIV' ? event.currentTarget.children[0] : event.currentTarget;
            var errorBlock = document.getElementById(evInput.name + "-error");
            if (evInput.checkValidity()) {
                errorBlock.innerText = '';
                evInput.classList.remove('error-border');
                validDates[evInput.name] = true;
            } else {
                errorBlock.innerText = evInput.validationMessage;
                evInput.classList.add('error-border');
                validDates[evInput.name] = false;
            }
            checkValidAll();
        }
    }

    // отправка формы на сервер
    $('#sendForm').click(function(event) {
        event.preventDefault();

        if (isValidForm) {

            // grecaptcha.execute();
            // window.createLead = function (token) {
                var prelouderElem = document.getElementById("myPreloader");
                var sendFormBtnElem = document.getElementById("sendForm");
                prelouderElem.style.display = 'block';
                sendFormBtnElem.style.display = 'none';

                var form_data = $(form).serializeArray(); //собераем все данные из формы
                    for(var i = 0; i < form_data.length; i++) {
                        // вырезаем 'iAgree'
                        if (form_data[i].name === 'iAgree') {
                            form_data.splice(i, 1);
                            break;
                        }
                    }
                // grecaptcha.reset();

                    $.post(
                        responseURL, // адрес к обработчику. Пример http://crm.domain.ru/LeadCRM.php
                        form_data,
                        function(response) {
                            prelouderElem.style.display = 'none';
                            sendFormBtnElem.style.display = 'block';

                            try {
                                response = JSON.parse(response);
                            } catch (e) {
                                alert('Ошибка сервера');
                            }

                            if (response.result === 'success') {
                                var formBlockElem = document.getElementsByClassName('CssBoxForm');
                                formBlockElem[0].style.display = 'none';

                                var messageSuccessBlockElem = document.getElementsByClassName('message-success');
                                messageSuccessBlockElem[0].style.display = 'flex';
                            } else {
                                var errorBlockElem = document.getElementsByClassName('error-block')[0];

                                //1 вариант - выводим самую первую ошибку, с сервера
                                // if (response.errors) {
                                //     for (var property in response.errors) {
                                //         errorBlockElem.textContent = property + ": " + response.errors[property];
                                //     }
                                // }

                                // 2 вариант - показываем одну общую ошибку, не показываем серверные ошибки
                                errorBlockElem.textContent = "Ошибка сервера!";
                            }
                        }
                    );
                // };
        }
    });



    // вырезает все символы кроме цифр
    // добавлять его в html в тег input как oninput="numberOnly(event);"

    // только числа
    window.numberOnly = function(event) {
        event.currentTarget.value = event.currentTarget.value.replace(/[^\d]/g, '');
    };

    //  числа и спецсимволы -+–()
    window.numberAndSpecSymbols = function(event) {
        event.currentTarget.value = event.currentTarget.value.replace(/[^-+–()\d]/g, '');
    };

    window.setIAgree = function(event) {
        isIAgree = event.currentTarget.checked;
        checkValidAll();
    };
});