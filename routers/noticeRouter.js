import express from "express";
import routes from "../routes";
import {
  notice,
  noticeDetail,
  deleteNotice,
  postEditNotice,
  getEditNotice
} from "../controllers/noticeControllers";
import { onlyPrivate } from "../middlewares";

const noticeRouter = express.Router();

noticeRouter.get(routes.notice, notice);

noticeRouter.get(routes.editNotice(), onlyPrivate, getEditNotice);
noticeRouter.post(routes.editNotice(), onlyPrivate, postEditNotice);

noticeRouter.get(routes.noticeDetail(), noticeDetail);
noticeRouter.get(routes.deleteNotice(), onlyPrivate, deleteNotice);

export default noticeRouter;
