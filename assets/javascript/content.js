// 버튼 클릭시 내용 추가, 줄이기 스크립트.

const btn = document.querySelector(".seeMore");
const seeMoreCont = document.querySelector(".cont01-none");

const TOGGLE_CLASS = "btn-none-block";

const btnClickFunction = () => {
  btn.addEventListener("click", () => {
    const seeMoreClass = seeMoreCont.classList.contains(TOGGLE_CLASS);
    if (!seeMoreClass) {
      seeMoreCont.classList.add(TOGGLE_CLASS);
      btn.innerHTML = "See more";
    } else {
      seeMoreCont.classList.remove(TOGGLE_CLASS);
      btn.innerHTML = "Close";
    }
  });
};

btnClickFunction();
