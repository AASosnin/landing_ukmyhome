// data
const pricePageList = [
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
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
]

// Template
const elementPricePageList = document.querySelector(".pricepagelist");
const elementPricePageListTemplate = document.createElement("ul");
i = 1; //todo инкапсулировать функцию
pricePageList.forEach((el) => {
  elementPricePageListTemplate.insertAdjacentHTML('beforeend', `
    <li>
      <div class="pricepagelist__num"><span>${i}</span></div>
      <div class="pricepagelist__text">
        <p>
          ${el.text}
        </p>
      </div>
    </li>
  `);
  i += 1;
})
elementPricePageList.appendChild(elementPricePageListTemplate);
