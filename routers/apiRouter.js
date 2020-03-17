import express from "express";
import routes from "../routes";
import {
  postComicsRegisterView,
  postAddComment,
  postCommentDelete
} from "../controllers/webtoonControllers";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postComicsRegisterView);
apiRouter.post(routes.addComment, postAddComment);
apiRouter.post(routes.commentDelete, postCommentDelete);

export default apiRouter;
// api는 database를 통해 '다른 서비스와 통신하기 위해' 존재함.
// 우리는 이러한 url을 통해 database를 변경할 수 있다.
// 이러한 api url은 어디에서나 접근할 수 있다.
