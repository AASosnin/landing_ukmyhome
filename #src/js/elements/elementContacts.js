// template
function contactsTemplate(options) {
  const elementContacts = document.querySelector(".contacts");
  const elementContactsPhones = document.createElement("div");
  elementContactsPhones.classList.add("contacts__phones");
  const elementContactsDot = document.createElement("div");
  elementContactsDot.classList.add("contacts__dot");
  const elementContactsText = document.createElement("div");
  elementContactsText.classList.add("contacts__text");

  options.phones.forEach((phone) => {
    elementContactsPhones.insertAdjacentHTML("beforeend", `
      <div class="contacts__phone">
        <span>${phone}</span>
      </div>
    `)
  });


  elementContactsText.insertAdjacentHTML("beforeend", options.text);


  elementContacts.appendChild(elementContactsPhones);
  elementContacts.appendChild(elementContactsDot);
  elementContacts.appendChild(elementContactsText);
};