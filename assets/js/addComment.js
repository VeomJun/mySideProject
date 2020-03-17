import axios from "axios";

const jsComment = document.querySelector("#jsComment");
const jsList = document.querySelector("#jsList");
const jsNumber = document.querySelector("#jsNumber");

const fakeRemoveNumber = () => {
  jsNumber.innerHTML = parseInt(jsNumber.innerHTML, 10) - 1;
};

const fakeRemove = (id, target) => {
  const h1 = target.parentElement;
  const li = h1.parentElement;
  jsList.removeChild(li);
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

const fakeNumber = () => {
  jsNumber.innerHTML = parseInt(jsNumber.innerHTML, 10) + 1;
};

const fakeComment = (comment, id) => {
  const li = document.createElement("li");
  const h1 = document.createElement("h1");
  const button = document.createElement("button");
  const x = "❌";
  button.innerHTML = x;
  button.id = String(id);
  button.addEventListener("click", handleRemove);
  h1.innerHTML = comment;
  h1.appendChild(button);
  li.appendChild(h1);
  jsList.prepend(li);
  fakeNumber();
};

const sendComment = async comment => {
  const registerId = window.location.href.split("/comics/")[1];
  const bregisterId = window.location.href.split("/illuste/")[1];
  const cregisterId = window.location.href.split("/sketch/")[1];
  const dregisterId = window.location.href.split("/notice/")[1];
  if (window.location.href.split("/")[3] === "comics") {
    const response = await axios({
      url: `/api/${registerId}/comment`,
      method: "POST",
      data: {
        reply: comment
      }
    });
    if (response.status === 200) {
      fakeComment(comment, response.data._id);
    }
  } else if (window.location.href.split("/")[3] === "illuste") {
    const response = await axios({
      url: `/bpi/${bregisterId}/bcomment`,
      method: "POST",
      data: {
        reply: comment
      }
    });
    if (response.status === 200) {
      fakeComment(comment, response.data._id);
    }
  } else if (window.location.href.split("/")[3] === "sketch") {
    const response = await axios({
      url: `/cpi/${cregisterId}/ccomment`,
      method: "POST",
      data: {
        reply: comment
      }
    });
    if (response.status === 200) {
      fakeComment(comment, response.data._id);
    }
  } else if (window.location.href.split("/")[3] === "notice") {
    const response = await axios({
      url: `/dpi/${dregisterId}/dcomment`,
      method: "POST",
      data: {
        reply: comment
      }
    });
    if (response.status === 200) {
      fakeComment(comment, response.data._id);
    }
  }
};

///////////////////////////////////////////////////////////////////

const handleSubmit = e => {
  e.preventDefault();
  const commentInput = jsComment.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

if (jsList) {
  jsComment.addEventListener("submit", handleSubmit);
}
