import axios from "axios";

const jsDList = document.querySelector("#jsList");
const jsDNumber = document.querySelector("#jsNumber");
const jsText = document.querySelectorAll(".jsText");

const fakeRemoveNumber = () => {
  jsDNumber.innerHTML = parseInt(jsDNumber.innerHTML, 10) - 1;
};

const fakeRemove = (id, target) => {
  const h1 = target.parentElement;
  const li = h1.parentElement;
  jsDList.removeChild(li);
  fakeRemoveNumber();
};

const handleRemove = async e => {
  const target = e.target;
  const removeId = target.id;
  if (window.location.href.split("/")[3] === "comics") {
    const theFetch = await axios({
      url: `/api/${removeId}/delete`,
      method: "POST",
      data: {
        removeId
      }
    });
    if (theFetch.status === 200) {
      fakeRemove(removeId, target);
    }
  } else if (window.location.href.split("/")[3] === "illuste") {
    const theFetch = await axios({
      url: `/bpi/${removeId}/bdelete`,
      method: "POST",
      data: {
        removeId
      }
    });
    if (theFetch.status === 200) {
      fakeRemove(removeId, target);
    }
  } else if (window.location.href.split("/")[3] === "sketch") {
    const theFetch = await axios({
      url: `/cpi/${removeId}/cdelete`,
      method: "POST",
      data: {
        removeId
      }
    });
    if (theFetch.status === 200) {
      fakeRemove(removeId, target);
    }
  } else if (window.location.href.split("/")[3] === "notice") {
    const theFetch = await axios({
      url: `/dpi/${removeId}/ddelete`,
      method: "POST",
      data: {
        removeId
      }
    });
    if (theFetch.status === 200) {
      fakeRemove(removeId, target);
    }
  }
};

const addEvent = () => {
  jsText.forEach(function(e) {
    const delBtn = e.childNodes[1];
    delBtn.addEventListener("click", handleRemove);
  });
};

if (jsText) {
  addEvent();
}
