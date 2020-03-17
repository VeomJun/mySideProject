// 여기가 바로 서버가 만들어진 파일
// node.js의 프레임워크인 express를 이용하여 간단하게 서버를 제작했다.
// 서버는 내가 사용 중인 이 노트북에 내장 되어 있는 로컬 서버로
// 이를 localhost라 부른다. 나는 그 중에서도 포트 번호 4000번의 localhost를 사용하였다.
import "@babel/polyfill";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import sketchRouter from "./routers/sketchRouter";
import noticeRouter from "./routers/noticeRouter";
import illustrateRouter from "./routers/illustrateRouter";
import passport from "passport";
import comicsRouter from "./routers/comicsRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localMiddlewares } from "./middlewares";
import uploadRouter from "./routers/uploadRouter";
import session from "express-session";
import mongoStore from "connect-mongo";
import mongoose from "mongoose";
//passport-session을 사용할 수 있도록 npm에서 express-session을 다운로드 한다.
import "./passport";
import path from "path";
import apiRouter from "./routers/apiRouter";
import bpiRouter from "./routers/bpiRouter";
import cpiRouter from "./routers/cpiRouter";
import dpiRouter from "./routers/dpiRouter";

const app = express();

const CookieStore = mongoStore(session);

// express 서버를 app이라는 변수 값으로 지정해주고 사용한다.
// 여기서 express 서버로부터 입력해 놓은 데이터를 브라우저 상에 표현할 수 있다.
// 이때 사용하는 것이 get method이다.
// 해당 url주소가 먼저 표기되고, 그 다음에 브라우저 상에 표현할 정보를 입력한다.
// 이때에는 controller를 사용하여 해당 페이지에서 표현할 정보에 원하는 명령을 내릴 수 있다.

// 웹사이트, 브라우저가 작동하는 원리는 크게 2가지이다. get과 post.
// 즉 라우터는 'get과 post방식을 이용해서 이러이러한 url에 다음에 해당하는 값을 표현하라'라는
// 명령과도 같은 것이다.

app.use(helmet()); // 보안을 위한 미들웨어
// using router globally
// router 사이에 미들웨어로서 사용할 수 있으나,
// 지금과 같이 use를 통해 따로 설정해 놓음으로써 모든 router에
// 적용시킬 수 있다. 단, 이때 순서를 조심해야 한다.
app.set("view engine", "pug");
// Model에 저장해 놓은 데이터를 브라우저 상에 표시하기 위해
// View 사용. 이 때 view engine을 "pug"으로 설정.
// 이렇게 설정해 놓은 pug 파일들은 기본 설정에 따라 정해진 views 파일에 저장.
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static( path.join(__dirname, "static") ));
// (위의 두 줄) /upload or /static에 접근했을 경우,
/////////////////////// 이 부분은 공부가 필요하다. (윗줄) /////////////////////////////////
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); // morgan - 페이지 이동을 추적해 주는 미들웨어
// 콘솔 창에서 라우터의 이동과 상황을 표시해 준다 ex) GET / 304 10.490 ms - -
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection })
    // 위 방법을 통해서 쿠키를 데이터 베이스에 저장해 놓는다.
    // 즉, 위 방법을 통해서 쿠키를 데이터 베이스에 저장해 놓기 때문에
    // 서버와의 연결이 끊기더라도 쿠키를 보존할 수 있고, 로그인 상태 또한 유지할 수 있다.
  })
);
//session은 암호화된 쿠키를 해독한다.

app.use(passport.initialize());
//passport를 초기화 시킨다.
app.use(passport.session());

app.use(localMiddlewares);
// 미들웨어를 이용해 전역적(글로벌)으로 사용할 수 있는
// 변수를 추가할 수 있음

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.home, comicsRouter);
app.use(routes.home, sketchRouter);
app.use(routes.home, noticeRouter);
app.use(routes.home, illustrateRouter);
app.use(routes.upload, uploadRouter);
app.use(routes.dpi, dpiRouter);
app.use(routes.bpi, bpiRouter);
app.use(routes.api, apiRouter);
app.use(routes.cpi, cpiRouter);
// app.get 또는 post 대신 app.use를 사용하는 이유
// 해당 url을 모됼화 시킨 함수들을 이용하여 사용할 수 있기 때문이다
// 그렇기 때문에 export된 해당 모듈 파일 내에서 진짜 라우트가 작성된다

export default app;
