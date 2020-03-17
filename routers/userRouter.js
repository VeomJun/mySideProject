import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  postEditProfile,
  getEditProfile,
  getChangePassword,
  postChangePassword,
  me
} from "../controllers/userControllers";
import { onlyPrivate, uploadProfileMulter } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.users, users);

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(
  routes.editProfile,
  onlyPrivate,
  uploadProfileMulter,
  postEditProfile
);

userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);

userRouter.get(routes.userDetail(), userDetail);

export default userRouter;