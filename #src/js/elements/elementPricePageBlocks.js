// Template
function pricePageBlocksTemplate(options) {
  const elementPricePageBlocks = document.querySelector(".pricepageblocks");
  options.forEach((el) => {
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
  });
};