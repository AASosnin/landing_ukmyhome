// data
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
]

// template
const elementBodyCards = document.querySelector(".bodycards");
bodyCardList.forEach((el) => {
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
})


