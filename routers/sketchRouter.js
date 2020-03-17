import express from "express";
import routes from "../routes";
import {
  sketch,
  sketchDetail,
  deleteSketch,
  postEditSketch,
  getEditSketch
} from "../controllers/webtoonControllers";
import { onlyPrivate } from "../middlewares";

const sketchRouter = express.Router();

sketchRouter.get(routes.sketch, sketch);
sketchRouter.get(routes.sketchDetail(), sketchDetail);

sketchRouter.get(routes.editSketch(), onlyPrivate, getEditSketch);
sketchRouter.post(routes.editSketch(), onlyPrivate, postEditSketch);

sketchRouter.get(routes.deleteSketch(), onlyPrivate, deleteSketch);

export default sketchRouter;
