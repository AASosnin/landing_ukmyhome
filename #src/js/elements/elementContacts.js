// template
function contactsTemplate(options) {
  const elementContacts = document.querySelector(".contacts");
  const elementContactsPhones = document.createElement("div");
  elementContactsPhones.classList.add("contacts__phones");
  const elementContactsDot = document.createElement("div");
  elementContactsDot.classList.add("contacts__dot");
  const elementContactsTexts = document.createElement("div");
  elementContactsTexts.classList.add("contacts__texts");

  options.phones.forEach((phone) => {
    elementContactsPhones.insertAdjacentHTML("beforeend", `
      <div class="contacts__phone">
        <span>${phone}</span>
      </div>
    `)
  });

  options.texts.forEach((text) => {
    elementContactsTexts.insertAdjacentHTML("beforeend", `
      <div class="contacts__text">
        <p>${text}</p>
      </div>
    `)
  });

  elementContacts.appendChild(elementContactsPhones);
  elementContacts.appendChild(elementContactsDot);
  elementContacts.appendChild(elementContactsTexts);
};