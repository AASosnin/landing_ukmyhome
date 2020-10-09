// General object
const myModal = {};

// Methods
myModal.openclose = () => {
  const modal = document.querySelector('.my-modalwindow');
  const content = document.querySelector('.my-modalwindow__content');
  modal.classList.toggle("my-modalwindow-open");
  content.classList.toggle("my-modalwindow__content-open");
}

myModal.destroy = () => {
  const modal = document.querySelector('.my-modalwindow');
  modal.parentElement.removeChild(modal);
}

myModal.create = (html) => {
  const modalWindow = document.createElement("div");
  modalWindow.classList.add("my-modalwindow");
  modalWindow.insertAdjacentHTML("afterbegin", `
    <div class="my-modalwindow__content">
      ${html}
    </div>
  `)
  document.body.insertAdjacentElement('beforeend', modalWindow);
  addEventListener('click', (e) => {
    if (e.target === modalWindow) {
      myModal.openclose();
      setTimeout(() => {
        myModal.destroy();
      }, 200);
    }
  })
}

// Add event "Create -> Open -> FormListener" on button
function showModalForm(btn, content) {
  btn.addEventListener('click', (e) => {
    const modal = myModal;
    modal.create(content);
    setTimeout(() => {
      modal.openclose();
    }, 100);
    $(formFunction('-modal'));
  });
}

// Add event "Create -> Open" on button
function showModal(btn, content) {
  btn.addEventListener('click', (e) => {
    const modal = myModal;
    modal.create(content);
    setTimeout(() => {
      modal.openclose();
    }, 100);
  });
}