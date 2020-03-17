import express from "express";
import routes from "../routes";
import {
  comics,
  comicsDetail,
  deleteComics,
  postEditComics,
  getEditComics
} from "../controllers/webtoonControllers";
import { onlyPrivate } from "../middlewares";

const comicsRouter = express.Router();

comicsRouter.get(routes.comics, comics);

comicsRouter.get(routes.comicsDetail(), comicsDetail);

comicsRouter.get(routes.editComics(), onlyPrivate, getEditComics);
comicsRouter.post(routes.editComics(), onlyPrivate, postEditComics);

comicsRouter.get(routes.deleteComics(), onlyPrivate, deleteComics);

export default comicsRouter;
