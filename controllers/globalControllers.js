import passport from "passport";
import routes from "../routes";
import Comics from "../models/Comics";
import Illuste from "../models/Illuste";
import Sketch from "../models/Sketch";
import Notice from "../models/Notice";
import Back from "../models/Back";
import User from "../models/User";

export const home = async (req, res) => {
  try {
    const back = await Back.find({});
    res.render("home", { pageTitle: "Home", back });
  } catch (error) {
    console.log(error);
    res.render("home", {
      pageTitle: "Home",
      comics: [],
      illuste: [],
      sketch: [],
      notice: []
    });
  }
};

// 윗줄에서 Comics가 아닌 comics로 들어가는 이유...
// const comics를 통해 Comics 모델 내의 값들을 정리해 놓았기 때문...
// render 함수의 첫번 째 인자("home")는 템플릿을 의미하고
// 두번 째 인자는 템플릿에 추가할 정보가 담긴 객체이다.

export const about = (req, res) => res.render("about", { pageTitle: "About" });

export const search = async (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  console.log(searchingBy);
  let comics = [];
  let illuste = [];
  let sketch = [];
  let notice = [];
  try {
    comics = await Comics.find({
      title: { $regex: searchingBy, $options: "i" }
    });
    illuste = await Illuste.find({
      title: { $regex: searchingBy, $options: "i" }
    });
    sketch = await Sketch.find({
      title: { $regex: searchingBy, $options: "i" }
    });
    notice = await Notice.find({
      title: { $regex: searchingBy, $options: "i" }
    });
  } catch (error) {}
  res.render("search", {
    pageTitle: "Search",
    searchingBy,
    comics,
    illuste,
    sketch,
    notice
  });
};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "join" });
};

// postJoin (2/14)
export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password1 }
  } = req;
  if (password !== password1) {
    res.status(400);
    res.render("join", { pageTitle: "join" });
  } else {
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "login" });
};

export const postLogin = passport.authenticate("local", {
  //passport.authenticate는 username(우리의 경우 email)과 password를 찾도록 설정되어 있음.
  failureRedirect: routes.login,
  successRedirect: routes.home
});

export const naverLogin = passport.authenticate("naver", null);
// 사용자를 네이버로 보내주는 역할.

export const naverLoginCallback = async (
  //callback function을 통해 아직까지는 네이버로부터 정보를 받아오는 단계만 구축해 놓음.
  _,
  __,
  profile,
  done
) => {
  const {
    _json: { id, nickname, email, profile_image: avatarUrl }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.naverId = id;
      user.save();
      return done(null, user);
    }
    const newUser = await User.create({
      naverId: id,
      email,
      avatarUrl,
      nickname
    });
    return done(null, newUser);
  } catch (error) {
    console.log(error);
    return done(error, null);
  }
};

export const postNaverLogin = (req, res) => {
  res.redirect(routes.home);
};

export const kakaoLogin = passport.authenticate("kakao");

export const kakaoLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  const {
    _json: {
      id,
      kakao_account: {
        email,
        profile: { nickname }
      }
    }
  } = profile;
  console.log(id, email, nickname);
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.kakaoId = id;
      user.save();
      return done(null, user);
    }
    const newUser = await User.create({
      kakaoId: id,
      email,
      name: nickname
    });
    return done(null, newUser);
  } catch (error) {
    return done(error);
  }
};

export const postKakaoLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const me = async (req, res) => {
  const { user: { id } } = req;
  const user = await User.findById(id);
  res.render("userDetail", { pageTitle: "user-detail", user });
};
