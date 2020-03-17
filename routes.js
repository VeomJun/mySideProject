// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";
const ABOUT = "/about";

// User
const USERS = "/users";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const USER_DETAIL = "/:id";
const ME = "/me";

// Sketch
const SKETCH = "/sketch";
const SKETCH_DETAIL = "/sketch/:id";
const EDIT_SKETCH = "/sketch/:id/edit-sketch";
const DELETE_SKETCH = "/sketch/:id/delete-sketch";

// Notice
const NOTICE = "/notice";
const NOTICE_DETAIL = "/notice/:id";
const EDIT_NOTICE = "/notice/:id/edit-notice";
const DELETE_NOTICE = "/notice/:id/delete-notice";

// Illuste
const ILLUSTE = "/illuste";
const ILLUSTE_DETAIL = "/illuste/:id";
const EDIT_ILLUSTE = "/illuste/:id/edit-illuste";
const DELETE_ILLUSTE = "/illuste/:id/delete-illuste";

// Comics
const COMICS = "/comics";
const COMICS_DETAIL = "/comics/:id";
const EDIT_COMICS = "/comics/:id/edit-comics";
const DELETE_COMICS = "/comics/:id/delete-comics";

// Upload
const UPLOAD = "/upload";
const UPLOAD_DETAIL = "/upload-detail";
const UPLOAD_COMICS = "/upload-comics";
const UPLOAD_ILLUSTE = "/upload-illuste";
const UPLOAD_SKETCH = "/upload-sketch";
const UPLOAD_NOTICE = "/upload-notice";
const UPLOAD_BACKGROUND = "/upload-background";

// Naver
const NAVER = "/auth/naver";
const NAVER_CALLBACK = "/auth/naver/callback";

// Kakao
const KAKAO = "/auth/kakao";
const KAKAO_CALLBACK = "/oauth/kakao/callback";

// API
const API = "/api";
const REGISTER_VIEW = "/:id/view";
const ADD_COMMENT = "/:id/comment";
const COMMENT_DELETE = "/:id/delete";
// api url은 사용자가 접근할 수 있는 일반적인 url이 아니다.
// 이는 사용자가 볼 수도, 접근할 수도 없으며 어떤 템플렛도 렌더링하지 않는다.
// 이러한 api url은 서버와만 통신이 이루어진다.

// BPI
const BPI = "/bpi";
const BPI_REGISTER_VIEW = "/:id/bpiview";
const BPI_COMMENT = "/:id/bcomment";
const BPI_COMMENT_DELETE = "/:id/bdelete";

// CPI
const CPI = "/cpi";
const CPI_REGISTER_VIEW = "/:id/cpiview";
const CPI_COMMENT = "/:id/ccomment";
const CPI_COMMENT_DELETE = "/:id/cdelete";

// DPI
const DPI = "/dpi";
const DPI_REGISTER_VIEW = "/:id/dpiview";
const DPI_COMMENT = "/:id/dcomment";
const DPI_COMMENT_DELETE = "/:id/ddelete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  about: ABOUT,
  users: USERS,
  userDetail: id => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  sketch: SKETCH,
  sketchDetail: id => {
    if (id) {
      return `/sketch/${id}`;
    } else {
      return SKETCH_DETAIL;
    }
  },
  notice: NOTICE,
  noticeDetail: id => {
    if (id) {
      return `/notice/${id}`;
    } else {
      return NOTICE_DETAIL;
    }
  },
  illuste: ILLUSTE,
  illusteDetail: id => {
    if (id) {
      return `/illuste/${id}`;
    } else {
      return ILLUSTE_DETAIL;
    }
  },
  comics: COMICS,
  comicsDetail: id => {
    if (id) {
      return `/comics/${id}`;
    } else {
      return COMICS_DETAIL;
    }
  },
  upload: UPLOAD,
  uploadDetail: UPLOAD_DETAIL,
  uploadComics: UPLOAD_COMICS,
  uploadIlluste: UPLOAD_ILLUSTE,
  uploadSketch: UPLOAD_SKETCH,
  uploadNotice: UPLOAD_NOTICE,
  uploadBackground: UPLOAD_BACKGROUND,
  editComics: id => {
    if (id) {
      return `/comics/${id}/edit-comics`;
    } else {
      return EDIT_COMICS;
    }
  },
  editIlluste: id => {
    if (id) {
      return `/illuste/${id}/edit-illuste`;
    } else {
      return EDIT_ILLUSTE;
    }
  },
  editSketch: id => {
    if (id) {
      return `/sketch/${id}/edit-sketch`;
    } else {
      return EDIT_SKETCH;
    }
  },
  editNotice: id => {
    if (id) {
      return `/notice/${id}/edit-notice`;
    } else {
      return EDIT_NOTICE;
    }
  },
  deleteComics: id => {
    if (id) {
      return `/comics/${id}/delete-comics`;
    } else {
      return DELETE_COMICS;
    }
  },
  deleteIlluste: id => {
    if (id) {
      return `/illuste/${id}/delete-illuste`;
    } else {
      return DELETE_ILLUSTE;
    }
  },
  deleteSketch: id => {
    if (id) {
      return `/sketch/${id}/delete-sketch`;
    } else {
      return DELETE_SKETCH;
    }
  },
  deleteNotice: id => {
    if (id) {
      return `/notice/${id}/delete-notice`;
    } else {
      return DELETE_NOTICE;
    }
  },
  naver: NAVER,
  naverCallback: NAVER_CALLBACK,
  kakao: KAKAO,
  kakaoCallback: KAKAO_CALLBACK,
  me: ME,
  api: API,
  registerView: REGISTER_VIEW,
  addComment: ADD_COMMENT,
  commentDelete: COMMENT_DELETE,
  bpi: BPI,
  BpiRegisterView: BPI_REGISTER_VIEW,
  BpiComment: BPI_COMMENT,
  BpiCommentDelete: BPI_COMMENT_DELETE,
  cpi: CPI,
  CpiRegisterView: CPI_REGISTER_VIEW,
  CpiComment: CPI_COMMENT,
  CpiCommentDelete: CPI_COMMENT_DELETE,
  dpi: DPI,
  DpiRegisterView: DPI_REGISTER_VIEW,
  DpiComment: DPI_COMMENT,
  DpiCommentDelete: DPI_COMMENT_DELETE
};

export default routes;
