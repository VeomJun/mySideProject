const illusteRegisterView = () => {
  const illusteId = window.location.href.split("/illuste/")[1];
  fetch(`/bpi/${illusteId}/bpiview`, {
    method: "POST"
  });
};

const sketchRegisterView = () => {
  const sketchId = window.location.href.split("/sketch/")[1];
  fetch(`/cpi/${sketchId}/cpiview`, {
    method: "POST"
  });
};

const noticeRegisterView = () => {
  const noticeId = window.location.href.split("/notice/")[1];
  fetch(`/dpi/${noticeId}/dpiview`, {
    method: "POST"
  });
};

const registerView = () => {
  const registerId = window.location.href.split("/comics/")[1];
  fetch(`/api/${registerId}/view`, {
    method: "POST"
  });
};
// 만약 database에 변화를 주지 않고 싶다면 get method를,
// database에 변화를 주고 싶다면, post method를 사용한다.

if (window.location.href.split("/")[3] === "comics") {
  registerView();
} else if (window.location.href.split("/")[3] === "illuste") {
  illusteRegisterView();
} else if (window.location.href.split("/")[3] === "sketch") {
  sketchRegisterView();
} else if (window.location.href.split("/")[3] === "notice") {
  noticeRegisterView();
}
