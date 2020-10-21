// URL
const responseURL = "https://crm.ukmyhome.ru/LeadCRM.php";

// Как запустить УК с нуля лист
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
];

// Что такое франшиза, список
const whatIsFranchiseList = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
];

// Разница УК ТСЖ карточки
const bodyCardList = [
  {
    header: "Управляющая компания",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ea! Id perspiciatis, accusamus hic unde ipsum quis perferendis consequuntur voluptas repellendus odio sapiente culpa dolore aliquid qui ea beatae quas!</br>
    </br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ea! Id perspiciatis, accusamus hic unde ipsum quis perferendis consequuntur voluptas repellendus odio sapiente culpa dolore aliquid qui ea beatae quas!`,
  },
  {
    header: "Товарищеское сотружество жильцов",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ea! Id perspiciatis, accusamus hic unde ipsum quis perferendis consequuntur voluptas repellendus odio sapiente culpa dolore aliquid qui ea beatae quas!</br>
    </br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ea! Id perspiciatis, accusamus hic unde ipsum quis perferendis consequuntur voluptas repellendus odio sapiente culpa dolore aliquid qui ea beatae quas!</br>
    </br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ea! Id perspiciatis, accusamus hic unde ipsum quis perferendis consequuntur voluptas repellendus odio sapiente culpa dolore aliquid qui ea beatae quas!`,
  },
];

// Сколько стоит франшиза. Список
const pricePageListList = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

// Сколько стоит франшиза. Блоки с ценой
const pricePageBlocksList = [
  {
    header: "Франшиза УК",
    price: "500 000 руб.",
  },
  {
    header: "Франшиза ТСЖ",
    price: "400 000 руб.",
  },
];

// Дополнительные продукты
const dopPageList = [
  {
    id: 1,
    icon: "./img/doppage_jurist.svg",
    header: "Юриспруденция",
    text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, dolorem.",
  },
  {
    id: 2,
    icon: "./img/doppage_buhgalter.svg",
    header: "Бухгалтерия",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, dolorem.",
  },
  {
    id: 3,
    icon: "./img/doppage_marketing.svg",
    header: "Маркетинг",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
];


// Контакты в footer слева
const contactsList = {
  phones: [
    "8-999-222-11-22",
    "8-999-111-33-44",
  ],
  texts: [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor magni provident iure!",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  ],
};

// HTML для созания формы (для загрузки в модалку)
const formTemplate = createForm('-modal');