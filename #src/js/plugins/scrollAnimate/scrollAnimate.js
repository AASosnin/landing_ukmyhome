// Анимация элементов при достижении 1/2 высоты елемента
// В html добавить элементам класс "scrollAnimate"
function scrollAmimate() {
  const scrollAnimateList = document.querySelectorAll(".scrollAnimate");
  if (scrollAnimateList) {
    scrollAnimateList.forEach(element => {
      const elementHeight = element.offsetHeight;
      const elementCoord = element.getBoundingClientRect().top;
      const animStart = 2;

      let animStartPoint = window.innerHeight - element.getBoundingClientRect().height / animStart;

      if ((elementHeight / animStart) > (window.innerHeight)) {
        animStartPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((elementCoord < animStartPoint)) {
        element.classList.add("scrollAnimate-active");
      }
    });
  }
}

// Анимация элементов при достижении 3/4 высоты елемента
// В html добавить элементам класс "scrollAnimate34"
function scrollAmimate34() {
  const scrollAnimateList = document.querySelectorAll(".scrollAnimate34");
  if (scrollAnimateList) {
    scrollAnimateList.forEach(element => {
      const elementHeight = element.offsetHeight;
      const elementCoord = element.getBoundingClientRect().top;
      const animStart = 1.25;

      let animStartPoint = window.innerHeight - element.getBoundingClientRect().height / animStart;

      if ((elementHeight / animStart) > (window.innerHeight)) {
        animStartPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((elementCoord < animStartPoint)) {
        element.classList.add("scrollAnimate-active");
      }
    });
  }
}

// Анимация элементов при достижении 2/1 высоты елемента
// В html добавить элементам класс "scrollAnimate21"
function scrollAmimate21() {
  const scrollAnimateList = document.querySelectorAll(".scrollAnimate21");
  if (scrollAnimateList) {
    scrollAnimateList.forEach(element => {
      const elementHeight = element.offsetHeight;
      const elementCoord = element.getBoundingClientRect().top;
      const animStart = 0.5;

      let animStartPoint = window.innerHeight - element.getBoundingClientRect().height / animStart;

      if ((elementHeight / animStart) > (window.innerHeight)) {
        animStartPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((elementCoord < animStartPoint)) {
        element.classList.add("scrollAnimate-active");
      }
    });
  }
}


// scrollAmimate(); // Включить, если анимация нужна сразу
document.addEventListener("scroll", scrollAmimate);
document.addEventListener("scroll", scrollAmimate34);
document.addEventListener("scroll", scrollAmimate21);