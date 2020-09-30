// data
const howToMakeUKList = [
  {
    header: "Зарегистрировать организацию",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
  },
  {
    header: "Получить лицензию на ведение деятельности УК",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
  },
  {
    header: "Набрать штат сотрудников",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
  },
  {
    header: "Сдать квалификационный экзамен директору организации",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
  },
  {
    header: "Установить программное обеспечение, провести обучение персонала",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
  },
  {
    header: "Запустить сайт новой УК",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
  },
  {
    header: "Собрать пакет документов для приема домов на обслуживание",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
  },
  {
    header: "Организовать сбор денег и предоставление отчетности",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
  },
  {
    header: "“Далее список на обсуждение”",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
  },
]


// Template
const elementInfoList = document.querySelector(".element-info-list");
const elementInfoListTemplate = document.createElement("ul");
let i = 1;
howToMakeUKList.forEach((el) => {
  elementInfoListTemplate.insertAdjacentHTML('beforeend', `
    <li>
      <div class="element-info-list__li">
        <div class="element-info-list__li-wrapp">
          <div class="element-info-list__num"><span>${i}</span></div>
          <div class="element-info-list__text">${el.header}</div>
          <div class="element-info-list__info-btn-wrapper">
            <button class="element-info-list__info-btn">
              <div class="arrow-2">
                <div class="arrow-2-top"></div>
                <div class="arrow-2-bottom"></div>
              </div>
            </button>
          </div>
        </div>
        <div class="element-info-list__li-info element-info-list__li-info-none">
          <p>${el.text}</p>
        </div>
      </div>
    </li>
  `);
  i += 1;
})
elementInfoList.appendChild(elementInfoListTemplate);

// Event Listeners

const infoListBtnOpen = document.querySelectorAll(".element-info-list__info-btn");
const allBlocks = document.querySelectorAll(".element-info-list__li-info");

infoListBtnOpen.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const infoBlock = btn.parentElement.parentElement.parentElement.querySelector(".element-info-list__li-info");
    if (!infoBlock.classList.contains("element-info-list__li-info-none")) {
      if (btn.firstElementChild.classList.contains("arrow-2-open")) {
        btn.firstElementChild.classList.remove("arrow-2-open");
      }
      infoBlock.classList.remove("element-info-list__li-info-open");
      setTimeout(() => {
        infoBlock.classList.add("element-info-list__li-info-none");
      }, 200);
    }
    else {
      infoListBtnOpen.forEach((btn) => {
        if (btn.firstElementChild.classList.contains("arrow-2-open")) {
          btn.firstElementChild.classList.remove("arrow-2-open");
        }
      })
      allBlocks.forEach((el) => {
        if (!el.classList.contains(".element-info-list__li-info-none")) {
          el.classList.remove("element-info-list__li-info-open");
          el.classList.add("element-info-list__li-info-none");
        }
      })
      if (!btn.firstElementChild.classList.contains("arrow-2-open")) {
        btn.firstElementChild.classList.add("arrow-2-open");
      }
      infoBlock.classList.remove("element-info-list__li-info-none");
      setTimeout(() => {
        infoBlock.classList.add("element-info-list__li-info-open");
      }, 30);
    }
  })
})


