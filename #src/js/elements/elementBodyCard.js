// template
function bodyCardTemplate(options) {
  const elementBodyCards = document.querySelector(".bodycards");
  options.forEach((el) => {
    const elementBodyCard = document.createElement("div");
    elementBodyCard.classList.add("bodycard");
    elementBodyCard.insertAdjacentHTML("beforeend", `
      <div class="bodycard__header">
        <span>${el.header}</span>
      </div>
      <div class="bodycard__text">
        <p>
          ${el.text}
        </p>
      </div>
    `);
    elementBodyCards.insertAdjacentElement("beforeend", elementBodyCard);
  });
};