import express from "express";
import routes from "../routes";
import {
  illuste,
  illusteDetail,
  deleteIlluste,
  postEditIlluste,
  getEditIlluste
} from "../controllers/webtoonControllers";
import { onlyPrivate } from "../middlewares";

const illustrateRouter = express.Router();

illustrateRouter.get(routes.illuste, illuste);

illustrateRouter.get(routes.editIlluste(), onlyPrivate, getEditIlluste);
illustrateRouter.post(routes.editIlluste(), onlyPrivate, postEditIlluste);

illustrateRouter.get(routes.illusteDetail(), illusteDetail);
illustrateRouter.get(routes.deleteIlluste(), onlyPrivate, deleteIlluste);

export default illustrateRouter;
