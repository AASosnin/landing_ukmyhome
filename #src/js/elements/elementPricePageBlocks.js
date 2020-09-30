// data
const pricePageBlocksList = [
  {
    header: "Франшиза УК",
    price: "500 000 руб.",
  },
  {
    header: "Франшиза ТСЖ",
    price: "400 000 руб.",
  },
]

// Template
const elementPricePageBlocks = document.querySelector(".pricepageblocks");
pricePageBlocksList.forEach((el) => {
  elementPricePageBlocks.insertAdjacentHTML("beforeend", `
    <div class="pricepageblock">
      <div class="pricepageblock__header">
        <span>${el.header}</span>
      </div>
      <div class="pricepageblock__price">
        <span>${el.price}</span>
      </div>
    </div>
  `);
})