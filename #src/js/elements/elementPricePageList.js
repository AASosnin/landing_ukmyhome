// Template
function pricePageListTemplate(options) {
  const elementPricePageList = document.querySelector(".pricepagelist");
  const elementPricePageListTemplate = document.createElement("ul");
  let i = 1;
  options.forEach((el) => {
    elementPricePageListTemplate.insertAdjacentHTML('beforeend', `
      <li class="scrollAnimate">
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
}