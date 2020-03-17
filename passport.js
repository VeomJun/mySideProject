import passport from "passport";
import NaverStrategy from "passport-naver";
import KakaoStrategy from "passport-kakao";
import User from "./models/User";
import {
  naverLoginCallback,
  kakaoLoginCallback
} from "./controllers/globalControllers";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(
  new NaverStrategy(
    {
      clientID: process.env.NCLIENT_ID,
      clientSecret: process.env.NCLIENT_SECRET,
      callbackURL: `http://localhost:4000${routes.naverCallback}`
    },
    naverLoginCallback
  )
);

passport.use(
  new KakaoStrategy(
    {
      clientID: process.env.KCLIENT_ID,
      clientSecret: process.env.KCLIENT_SECRET,
      callbackURL: `http://localhost:4000${routes.kakaoCallback}`
    },
    kakaoLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
