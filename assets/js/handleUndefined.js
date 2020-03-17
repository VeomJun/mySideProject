const noticeDetail = document.querySelector(".notice__detail");
const theImage = document.querySelector(".the__image");
const IMAGE = document.querySelectorAll("img");

const UNDEFINED = "undefined";
let array = [];

IMAGE.forEach(function(e) {
  const src = e.src;
  array.push(src);
});

const scanImage = () => {
  if (array[0] === "http://localhost:4000/undefined") {
    IMAGE[0].classList.add(UNDEFINED);
  }
  if (array[1] === "http://localhost:4000/undefined") {
    IMAGE[1].classList.add(UNDEFINED);
  }
  if (array[2] === "http://localhost:4000/undefined") {
    IMAGE[2].classList.add(UNDEFINED);
  }
  if (array[3] === "http://localhost:4000/undefined") {
    IMAGE[3].classList.add(UNDEFINED);
  }
  if (array[4] === "http://localhost:4000/undefined") {
    IMAGE[4].classList.add(UNDEFINED);
  }
  if (array[5] === "http://localhost:4000/undefined") {
    IMAGE[5].classList.add(UNDEFINED);
  }
  if (array[6] === "http://localhost:4000/undefined") {
    IMAGE[6].classList.add(UNDEFINED);
  }
  if (array[7] === "http://localhost:4000/undefined") {
    IMAGE[7].classList.add(UNDEFINED);
  }
  if (array[8] === "http://localhost:4000/undefined") {
    IMAGE[8].classList.add(UNDEFINED);
  }
  if (array[9] === "http://localhost:4000/undefined") {
    IMAGE[9].classList.add(UNDEFINED);
  }
  if (array[10] === "http://localhost:4000/undefined") {
    IMAGE[10].classList.add(UNDEFINED);
  }
  if (array[11] === "http://localhost:4000/undefined") {
    IMAGE[11].classList.add(UNDEFINED);
  }
  if (array[12] === "http://localhost:4000/undefined") {
    IMAGE[12].classList.add(UNDEFINED);
  }
  if (array[13] === "http://localhost:4000/undefined") {
    IMAGE[13].classList.add(UNDEFINED);
  }
  if (array[14] === "http://localhost:4000/undefined") {
    IMAGE[14].classList.add(UNDEFINED);
  }
  if (array[15] === "http://localhost:4000/undefined") {
    IMAGE[15].classList.add(UNDEFINED);
  }
};

function init() {
  scanImage();
}

if (IMAGE) {
  init();
}
