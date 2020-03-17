import multer from "multer";
// multer는 우리가 업로드한 파일의 위치 즉, 파일명이 아닌
// location or url을 가져올 수 있도록 도와주는 middleware이다.
// Passport reads the cookies from the request and then
// finds the user with that session and puts it on req.user for you to use :)
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";

const s3 = new aws.S3({
  secretAccessKey: process.env.AWS_SECRETE_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_ID,
  region: "ap-northeast-1"
});

const uploadComics = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "gopubi/comics"
  })
});
const uploadIlluste = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "gopubi/illuste"
  })
});
const uploadSketch = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "gopubi/sketch"
  })
});
const uploadNotice = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "gopubi/notice"
  })
});
const uploadBackground = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "gopubi/background"
  })
});
const uploadProfile = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "gopubi/profile"
  })
});

export const uploadComicsMulter = uploadComics.fields([
  { name: "comicsFile", maxCount: 1 },
  { name: "noComicsFile", maxCount: 15 }
]);
// 위와 같은 형식처럼 upload input의 name을 적어 줌으로써 어디서 업로드 되는
// 것인지를 알 수 있게 된다. (이번 경우 uploadComics의 내용을 대표값으로 적용했음)
export const uploadIllusteMulter = uploadIlluste.fields([
  { name: "illusteFile", maxCount: 1 },
  { name: "noIllusteFile", maxCount: 15 }
]);
export const uploadSketchMulter = uploadSketch.fields([
  { name: "sketchFile", maxCount: 1 },
  { name: "noSketchFile", maxCount: 15 }
]);
export const uploadNoticeMulter = uploadNotice.fields([
  { name: "noticeFile", maxCount: 1 },
  { name: "noNoticeFile", maxCount: 15 }
]);
export const uploadBackgroundMulter = uploadBackground.fields([
  { name: "oneBackgroundFile", maxCount: 4 }
]);
export const uploadProfileMulter = uploadProfile.single("avatar");

export const localMiddlewares = (req, res, next) => {
  res.locals.siteName = "Gopubi";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  res.locals.myId = "5e6d871e3786b40b4c06718a";
  // passport와 session 덕분에 위의 req.user를 통해 로그인한 사용자의 정보를 알 수 있다.
  next();
};
// res.locals 뒤에 원하는 이름을 사용하고, 이에 따라 원하는 값을 줌으로써
// 전역적으로 사용할 수 있는 글로벌한 변수를 작성
// 이렇게 작성된 변수는 컨트롤러에서도 사용할 수 있으나,
// view 상에서도 원하는 정보를 삽입하는 용도로 사용될 수 있다.
// 중요한 점은 전역적으로 사용할 수 있다는 것.
// 이 때, next를 사용하여 다음 함수인 라우터로 넘길 수 있다.

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};
