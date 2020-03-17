import express from "express";
import routes from "../routes";
import {
  postSketchRegisterView,
  postSketchComment,
  postSketchCommentDelete
} from "../controllers/webtoonControllers";

const cpiRouter = express.Router();

cpiRouter.post(routes.CpiRegisterView, postSketchRegisterView);
cpiRouter.post(routes.CpiComment, postSketchComment);
cpiRouter.post(routes.CpiCommentDelete, postSketchCommentDelete);

export default cpiRouter;
// api는 database를 통해 '다른 서비스와 통신하기 위해' 존재함.
// 우리는 이러한 url을 통해 database를 변경할 수 있다.
// 이러한 api url은 어디에서나 접근할 수 있다.
