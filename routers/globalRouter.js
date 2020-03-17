import express from "express";
import passport from "passport";
import routes from "../routes";
import {
  home,
  about,
  search,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
  naverLogin,
  postNaverLogin,
  kakaoLogin,
  postKakaoLogin,
  me
} from "../controllers/globalControllers";
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.about, about);
globalRouter.get(routes.search, search);

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.naver, naverLogin);

globalRouter.get(
  routes.naverCallback,
  passport.authenticate("naver", {
    failureRedirect: routes.login,
    successRedirect: routes.home
  }),
  postNaverLogin
);

globalRouter.get(routes.logout, logout);

globalRouter.get(routes.kakao, kakaoLogin);

globalRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: routes.login }),
  postKakaoLogin
);

globalRouter.get(routes.me, me);

export default globalRouter;
