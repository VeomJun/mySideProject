import express from "express";
import routes from "../routes";
import {
  upload,
  uploadDetail,
  getUploadComics,
  postUploadComics,
  getUploadSketch,
  postUploadSketch,
  getUploadIlluste,
  postUploadIlluste,
  getUploadNotice,
  postUploadNotice,
  getUploadBackground,
  postUploadBackground
} from "../controllers/uploadControllers";
import {
  uploadComicsMulter,
  uploadIllusteMulter,
  uploadSketchMulter,
  uploadNoticeMulter,
  uploadBackgroundMulter,
  onlyPrivate
} from "../middlewares";

const uploadRouter = express.Router();

uploadRouter.get(routes.upload, onlyPrivate, upload);
uploadRouter.get(routes.uploadDetail, onlyPrivate, uploadDetail);

uploadRouter.get(routes.uploadComics, onlyPrivate, getUploadComics);
uploadRouter.post(
  routes.uploadComics,
  onlyPrivate,
  uploadComicsMulter,
  postUploadComics
);

uploadRouter.get(routes.uploadIlluste, onlyPrivate, getUploadIlluste);
uploadRouter.post(
  routes.uploadIlluste,
  onlyPrivate,
  uploadIllusteMulter,
  postUploadIlluste
);

uploadRouter.get(routes.uploadSketch, onlyPrivate, getUploadSketch);
uploadRouter.post(
  routes.uploadSketch,
  onlyPrivate,
  uploadSketchMulter,
  postUploadSketch
);

uploadRouter.get(routes.uploadNotice, onlyPrivate, getUploadNotice);
uploadRouter.post(
  routes.uploadNotice,
  onlyPrivate,
  uploadNoticeMulter,
  postUploadNotice
);

uploadRouter.get(routes.uploadBackground, onlyPrivate, getUploadBackground);
uploadRouter.post(
  routes.uploadBackground,
  onlyPrivate,
  uploadBackgroundMulter,
  postUploadBackground
);

export default uploadRouter;
