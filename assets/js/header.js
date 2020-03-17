const headerSearch = document.querySelector(".header-search");
const headerSearchIcon = document.querySelector("i");
const headerSecondIcon = document.querySelector(".fas.fa-times");
const headColumn = document.querySelectorAll(".header-column");
const headerWrapper = document.querySelector(
  ".header-column:not(:first-child)"
);
const main = document.querySelector("main");

const INVISIBLE = "invisible";
const NEW = "new";

const handleClick = () => {
  headColumn.forEach(function(e) {
    e.classList.add(INVISIBLE);
  });
  headerSearch.classList.add(NEW);
  headerWrapper.classList.add(INVISIBLE);
  headerSearchIcon.classList.add(INVISIBLE);
  console.log("hi");
};

headerSearchIcon.addEventListener("click", handleClick);
const handleDoubleClick = () => {
  headColumn.forEach(function(e) {
    e.classList.remove(INVISIBLE);
  });
  headerSearch.classList.remove(NEW);
  headerWrapper.classList.remove(INVISIBLE);
  headerSearchIcon.classList.remove(INVISIBLE);
};

main.addEventListener("click", handleDoubleClick);
