// 버튼 클릭시 내용 추가, 줄이기 스크립트.

const btn = document.querySelector(".seeMore");
const seeMoreCont = document.querySelector(".cont01-none");

const TOGGLE_CLASS = "btn-none-block";

const btnClickFunction = () => {
  btn.addEventListener("click", () => {
    const seeMoreClass = seeMoreCont.classList.contains(TOGGLE_CLASS);
    seeMoreCont.classList.toggle(TOGGLE_CLASS);
    if (!seeMoreClass) {
      btn.innerHTML = "See more";
    } else {
      btn.innerHTML = "Close";
    }
  });
};

btnClickFunction();
