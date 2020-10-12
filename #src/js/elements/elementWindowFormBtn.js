// Кнопка в правом нижнем углу экрана
function createWindowFormBtn(text) {
  const windowFormBtn = document.createElement("div");
  windowFormBtn.classList.add("window__form-btn");
  windowFormBtn.insertAdjacentHTML('afterbegin', `
    <button>${text}</button>
  `);
  document.body.insertAdjacentElement("afterbegin", windowFormBtn);
}