// data
const whatisfranchiseList = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
]

// Template
const elementWhatIsFranchise = document.querySelector(".whatisfranchise__body-right");
console.log(elementWhatIsFranchise);
const elementWhatIsFranchiseTemplate = document.createElement("ul");
i = 1; //todo инкапсулировать функцию
whatisfranchiseList.forEach((el) => {
  elementWhatIsFranchiseTemplate.insertAdjacentHTML('beforeend', `
    <li>
      <div class="whatisfranchise__body-right-num"><span>${i}</span></div>
      <div class="whatisfranchise__body-right-text">
        <p>
          ${el.text}
        </p>
      </div>
    </li>
  `);
  i += 1;
})
elementWhatIsFranchise.appendChild(elementWhatIsFranchiseTemplate);
