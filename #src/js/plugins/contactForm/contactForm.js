// Template
function createForm(typeName = '') {
    return `
    <div class="main-block${typeName}">
        <div class="wrapper${typeName}">
            <div class="content${typeName}">

                <div class="CssGrid${typeName}">

                    <div class="CssBoxForm${typeName}">
                         <span class="title-form${typeName}">Форма связи</span>
                        <form id="myForm${typeName}">

                            <div class="row${typeName}">
                                <span>Как к вам обращаться?*</span>
                                <input type="text" autocomplete="off" class="custom-input${typeName}" name="field_12" required>
                                <div id="field_12-error${typeName}" class="error${typeName}"></div>
                            </div>

                            <div class="row${typeName}">
                                <span>Телефон*</span>
                                <input type="text" maxlength="12" pattern="[^]{9,12}" title="Введите номер телефона без пробелов" oninput="numberAndSpecSymbols(event);" autocomplete="off" class="custom-input${typeName}" name="fieldTelephone" placeholder="+79991001020" required>
                                <div id="fieldTelephone-error${typeName}" class="error${typeName}"></div>
                            </div>

                            <div class="row${typeName}">
                                <span>Email</span>
                                <input type="text" pattern="^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$" autocomplete="off" title="Введите email полностью. Пример: info@mail.ru" class="custom-input${typeName}" name="fieldEmail" placeholder="info@mail.ru">
                                <div id="fieldEmail-error${typeName}" class="error${typeName}"></div>
                            </div>

                            <div class="error-block${typeName}"></div>

                            <button type="submit" class="submit-btn${typeName}" disabled id="sendForm${typeName}">Отправить</button>

                            <div id="myPreloader${typeName}" class="preloader${typeName}">
                                <div class="preloader${typeName}">
                                    <svg class="preloader__image${typeName}" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                                d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z">
                                        </path>
                                    </svg>
                                </div>
                            </div>

                        </form>

                        <!--Установка ReCAPTCHA. Админ консоль - https://www.google.com/recaptcha/admin -->
                        <!-- <div id="recaptcha${typeName}" class="g-recaptcha${typeName}" data-sitekey="6LcdZBEUAAAAAKNpDoNoA8f6Q-56_y2Cgx496sGl" data-callback="createLead" data-size="invisible"></div> -->
                    </div>

                    <div class="message-success${typeName}">
                        <span>Спасибо!</span>
                        <p>Мы получили вашу заявку.</p>
                        <p>Ожидайте звонка</p>
                        <a href="" class="message-success-btn${typeName}">
                            Отправить еще раз
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
    `
}

//? Обработчик для формы в footer. Колбэк вызван в файле callEvents.js

function formFunction(typeName = '') {
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
  var form = document.getElementById(`myForm${typeName}`);
  var sendFormBtn = document.getElementById(`sendForm${typeName}`);

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
          // form[i].onblur = checkValid;
          form[i].oninput = checkValid;
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
          var errorBlock = document.getElementById(evInput.name + "-error" + typeName);
          //общая валидация
          if (evInput.checkValidity()) {
              //доп валидация даты
              if (dateType.indexOf(evInput.name) + 1) {
                  if (evInput.value === '' || moment(evInput.value, 'DD.MM.YYYY', true).isValid()) {
                      errorBlock.innerText = '';
                      evInput.classList.remove('error-border' + typeName);
                      validDates[evInput.name] = true;
                  } else {
                      errorBlock.innerText = 'Некорректный формат';
                      evInput.classList.add('error-border' + typeName);
                      validDates[evInput.name] = false;
                  }
              } else {
                  errorBlock.innerText = '';
                  evInput.classList.remove('error-border' + typeName);
              }
          } else {
              errorBlock.innerText = evInput.title ? evInput.title : evInput.validationMessage;
              evInput.classList.add('error-border' + typeName);
          }
          checkValidAll();
      }
  }

  // доп валидация даты при выборе её в датапикере
  function checkDateValid(event, date) {
      if (event && date) {
          var evInput = event.currentTarget.tagName === 'DIV' ? event.currentTarget.children[0] : event.currentTarget;
          var errorBlock = document.getElementById(evInput.name + "-error" + typeName);
          if (evInput.checkValidity()) {
              errorBlock.innerText = '';
              evInput.classList.remove('error-border' + typeName);
              validDates[evInput.name] = true;
          } else {
              errorBlock.innerText = evInput.validationMessage;
              evInput.classList.add('error-border' + typeName);
              validDates[evInput.name] = false;
          }
          checkValidAll();
      }
  }

  // отправка формы на сервер
  $(`#sendForm${typeName}`).click(function(event) {
      event.preventDefault();

      if (isValidForm) {

          // grecaptcha.execute();
          // window.createLead = function (token) {
              var prelouderElem = document.getElementById("myPreloader" + typeName);
              var sendFormBtnElem = document.getElementById(`sendForm${typeName}`);
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
              form_data.unshift(
                  {
                      name: "fieldFio",
                      value: (~~(Math.random()*1e8)).toString(16),
                  },
                  );
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
                              var formBlockElem = document.getElementsByClassName('CssBoxForm' + typeName);
                              formBlockElem[0].style.display = 'none';

                              var messageSuccessBlockElem = document.getElementsByClassName('message-success' + typeName);
                              messageSuccessBlockElem[0].style.display = 'flex';
                          } else {
                              var errorBlockElem = document.getElementsByClassName('error-block' + typeName)[0];

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
}



//? Обработчик для формы в myModal. Колбэк вызван в файле ModalWindow.js

// function formFunctionModal(idMyForm, idSendForm) {
//   //ДЛЯ КАЖДОГО ДАТАПИКЕРА НЕОБХОДИМО:
//   //---Начало создание дата пикеров

//   // добавить его флаг для валидации
//   // изначальное состояние валидности поля
//   // если дата имеет атрибут required(обязательная), то выставляем false, если необязательная то true
//   var validDates = {
//       field_14: true
//   };

//   // в массив добавляем name всех датапикеров
//   var dateType = ['field_14'];

//   //создать сам датапикер в аргументе указывая его id
//   createDataPicker('field_14');

//   // пример когда у нас два поля типа "Дата"
//   // например есть поле field_14 и нам надо добавить ещё одно field_22
//   // тогда подключение датапикеров будет выглядеть следующим образом

//   /*  var validDates = {
//       field_14: false,
//       field_22: false
//   };

//   var dateType = ['field_14', field_22];

//   createDataPicker('field_14');
//   createDataPicker('field_22');
//   */

//   //---Конец создание дата пикеров

//   // типы элементов которые будут валидироваться
//   var validationType = ['text', 'textarea', 'number', 'email'];

//   var isValidForm = false;
//   var form = document.getElementById(idMyForm);
//   var sendFormBtn = document.getElementById(idSendForm);

//   // true, если блока "Я согласен с документами" не будет
//   // false, если блок будет
//   var isIAgree = true;

//   function createDataPicker(id) {
//       new Datepicker('#' + id, {
//           onChange: function (date) {
//               return checkDateValid(event, date)
//           }
//       });
//   }

//   // задаём события для проверки валидации
//   for (var i = 0; i < form.length; i++) {
//       if (validationType.indexOf(form[i].type) !== -1) {
//           // form[i].onblur = checkValid;
//           form[i].oninput = checkValid;
//       }
//   }

//   // проверка валидации всей формы
//   // по результату выполнения блочитт или дизблочит кнопку отправки формы
//   function checkValidAll() {
//       isValidForm = true;
//       for (var i = 0; i < form.length; i++) {
//           if (!form[i].checkValidity()) {
//               isValidForm = false;
//               break;
//           }
//       }

//       var dateValid = true;

//       if (validDates) {
//           for(var property in validDates) {
//               if (!validDates[property]) {
//                   dateValid = false;
//                   break;
//               }
//           }
//       }

//       sendFormBtn.disabled = !isValidForm || !dateValid || !isIAgree;
//   }

//   // проверка валидации конкретного поля и установка или затерание ошибки
//   function checkValid(event) {
//       if (event) {
//           var evInput = event.currentTarget;
//           var errorBlock = document.getElementById(evInput.name + "-error");
//           //общая валидация
//           if (evInput.checkValidity()) {
//               //доп валидация даты
//               if (dateType.indexOf(evInput.name) + 1) {
//                   if (evInput.value === '' || moment(evInput.value, 'DD.MM.YYYY', true).isValid()) {
//                       errorBlock.innerText = '';
//                       evInput.classList.remove('error-border');
//                       validDates[evInput.name] = true;
//                   } else {
//                       errorBlock.innerText = 'Некорректный формат';
//                       evInput.classList.add('error-border');
//                       validDates[evInput.name] = false;
//                   }
//               } else {
//                   errorBlock.innerText = '';
//                   evInput.classList.remove('error-border');
//               }
//           } else {
//               errorBlock.innerText = evInput.title ? evInput.title : evInput.validationMessage;
//               evInput.classList.add('error-border');
//           }
//           checkValidAll();
//       }
//   }

//   // доп валидация даты при выборе её в датапикере
//   function checkDateValid(event, date) {
//       if (event && date) {
//           var evInput = event.currentTarget.tagName === 'DIV' ? event.currentTarget.children[0] : event.currentTarget;
//           var errorBlock = document.getElementById(evInput.name + "-error");
//           if (evInput.checkValidity()) {
//               errorBlock.innerText = '';
//               evInput.classList.remove('error-border');
//               validDates[evInput.name] = true;
//           } else {
//               errorBlock.innerText = evInput.validationMessage;
//               evInput.classList.add('error-border');
//               validDates[evInput.name] = false;
//           }
//           checkValidAll();
//       }
//   }

//   // отправка формы на сервер
//   $('#' + idSendForm).click(function(event) {
//       event.preventDefault();

//       if (isValidForm) {

//           // grecaptcha.execute();
//           // window.createLead = function (token) {
//               var prelouderElem = document.getElementById("myPreloader");
//               var sendFormBtnElem = document.getElementById(idSendForm);
//               prelouderElem.style.display = 'block';
//               sendFormBtnElem.style.display = 'none';

//               var form_data = $(form).serializeArray(); //собераем все данные из формы
//                   for(var i = 0; i < form_data.length; i++) {
//                       // вырезаем 'iAgree'
//                       if (form_data[i].name === 'iAgree') {
//                           form_data.splice(i, 1);
//                           break;
//                       }
//                   }
//               form_data.unshift(
//                   {
//                       name: "fieldFio",
//                       value: (~~(Math.random()*1e8)).toString(16),
//                   },
//                   );
//               // grecaptcha.reset();

//                   $.post(
//                       responseURL, // адрес к обработчику. Пример http://crm.domain.ru/LeadCRM.php
//                       form_data,
//                       function(response) {
//                           prelouderElem.style.display = 'none';
//                           sendFormBtnElem.style.display = 'block';

//                           try {
//                               response = JSON.parse(response);
//                           } catch (e) {
//                               alert('Ошибка сервера');
//                           }

//                           if (response.result === 'success') {
//                               var formBlockElem = document.getElementsByClassName('CssBoxForm');
//                               formBlockElem[0].style.display = 'none';

//                               var messageSuccessBlockElem = document.getElementsByClassName('message-success');
//                               messageSuccessBlockElem[0].style.display = 'flex';
//                           } else {
//                               var errorBlockElem = document.getElementsByClassName('error-block')[0];

//                               //1 вариант - выводим самую первую ошибку, с сервера
//                               // if (response.errors) {
//                               //     for (var property in response.errors) {
//                               //         errorBlockElem.textContent = property + ": " + response.errors[property];
//                               //     }
//                               // }

//                               // 2 вариант - показываем одну общую ошибку, не показываем серверные ошибки
//                               errorBlockElem.textContent = "Ошибка сервера!";
//                           }
//                       }
//                   );
//               // };
//       }
//   });



//   // вырезает все символы кроме цифр
//   // добавлять его в html в тег input как oninput="numberOnly(event);"

//   // только числа
//   window.numberOnly = function(event) {
//       event.currentTarget.value = event.currentTarget.value.replace(/[^\d]/g, '');
//   };

//   //  числа и спецсимволы -+–()
//   window.numberAndSpecSymbols = function(event) {
//       event.currentTarget.value = event.currentTarget.value.replace(/[^-+–()\d]/g, '');
//   };

//   window.setIAgree = function(event) {
//       isIAgree = event.currentTarget.checked;
//       checkValidAll();
//   };
// }