// data
const contactsList = {
  phones: [
    "8-999-222-11-22",
    "8-999-111-33-44",
  ],
  texts: [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor magni provident iure!",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  ],
}

// template
const elementContacts = document.querySelector(".contacts");
const elementContactsPhones = document.createElement("div");
elementContactsPhones.classList.add("contacts__phones");
const elementContactsDot = document.createElement("div");
elementContactsDot.classList.add("contacts__dot");
const elementContactsTexts = document.createElement("div");
elementContactsTexts.classList.add("contacts__texts");

contactsList.phones.forEach((phone) => {
  elementContactsPhones.insertAdjacentHTML("beforeend", `
    <div class="contacts__phone">
      <span>${phone}</span>
    </div>
  `)
});

contactsList.texts.forEach((text) => {
  elementContactsTexts.insertAdjacentHTML("beforeend", `
    <div class="contacts__text">
      <p>${text}</p>
    </div>
  `)
});

elementContacts.appendChild(elementContactsPhones);
elementContacts.appendChild(elementContactsDot);
elementContacts.appendChild(elementContactsTexts);