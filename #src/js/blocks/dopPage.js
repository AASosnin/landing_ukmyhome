// template
function dopPageTemplate(options) {
  const dopPage = document.querySelector(".doppage");
  const dopPageBody = document.createElement("div");
  dopPageBody.classList.add("doppage__body");
  options.forEach((el) => {
    dopPageBody.insertAdjacentHTML("beforeend", `
      <div class="doppage__body-elements">
        <button class="doppage__body-element-icon scrollAnimate34" data-doppage-body-element-icon-num="${el.id}">
          <img src="${el.icon}" alt="test">
        </button>
        <div class="doppage__body-element-text">
          <span>${el.header}</span>
        </div>
      </div>
    `)
  });
  dopPage.insertAdjacentElement("beforeend", dopPageBody);

  const dopPageBodyTextBox = document.createElement("div");
  dopPageBodyTextBox.classList.add("doppage__body-text-box");
  options.forEach((el) => {
    dopPageBodyTextBox.insertAdjacentHTML("beforeend", `
    <div class="doppage__body-text doppage__body-text-none" data-doppage-body-element-icon-num="${el.id}">
      <p>${el.text}</p>
    </div>
    `)
  })
  dopPage.insertAdjacentElement("beforeend", dopPageBodyTextBox);
};




// events
function dopPageEvents() {
  const dopPageBtns = document.querySelectorAll(".doppage__body-element-icon");

  dopPageBtns.forEach((btn) => {
    btn.addEventListener("mouseenter", (e) => {
      e.preventDefault();
      if (!btn.classList.contains("doppage__body-element-icon-hover") && !btn.classList.contains("doppage__body-element-icon-active")) {
        btn.classList.add("doppage__body-element-icon-hover");
      }
    })
    btn.addEventListener("mouseleave", (e) => {
      e.preventDefault();
      if (btn.classList.contains("doppage__body-element-icon-hover")) {
        btn.classList.remove("doppage__body-element-icon-hover");
      }
    })
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const dopPageTexts = document.querySelectorAll(".doppage__body-text");
      dopPageTexts.forEach((text) => {
        if (!text.classList.contains("doppage__body-text-none")) {
          dopPageBtns.forEach((btn) => {
            if (btn.classList.contains("doppage__body-element-icon-active")) {
              btn.classList.remove("doppage__body-element-icon-active");
            }
          });
          text.classList.remove("doppage__body-text-open");
          setTimeout(() => {
            text.classList.add("doppage__body-text-none");
          }, 200);

        }
        else if(btn.dataset.doppageBodyElementIconNum === text.dataset.doppageBodyElementIconNum){
          dopPageTexts.forEach((el) => {
            if (!el.classList.contains("doppage__body-text-none")) {
              dopPageBtns.forEach((btn) => {
                if (btn.classList.contains("doppage__body-element-icon-active")) {
                  btn.classList.remove("doppage__body-element-icon-active");
                }
              });
              el.classList.remove("doppage__body-text-open");
              el.classList.add("doppage__body-text-none");
            }
          })
          btn.classList.remove("doppage__body-element-icon-hover");
          btn.classList.add("doppage__body-element-icon-active");
          text.classList.remove("doppage__body-text-none");
          setTimeout(() => {
            text.classList.add("doppage__body-text-open");
          }, 30);
        }
      })
    })
  });
};




