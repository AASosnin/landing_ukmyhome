// Template
function whatIsFranchiseTemplate(options) {
const elementWhatIsFranchise = document.querySelector(".whatisfranchise__body-right");
const elementWhatIsFranchiseTemplate = document.createElement("ul");
let i = 1;
options.forEach((el) => {
  elementWhatIsFranchiseTemplate.insertAdjacentHTML('beforeend', `
    <li class="scrollAnimate">
      <div class="whatisfranchise__body-right-num"><span>${i}</span></div>
      <div class="whatisfranchise__body-right-text">
          ${el.text}
      </div>
    </li>
  `);
  i += 1;
})
elementWhatIsFranchise.appendChild(elementWhatIsFranchiseTemplate);
};