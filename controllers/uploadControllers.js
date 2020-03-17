import routes from "../routes";
import Comics from "../models/Comics";
import Illuste from "../models/Illuste";
import Sketch from "../models/Sketch";
import Notice from "../models/Notice";
import Back from "../models/Back";

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });

export const uploadDetail = (req, res) =>
  res.render("uploadDetail", { pageTitle: "upload-detail" });

export const getUploadComics = (req, res) => {
  res.render("uploadComics", { pageTitle: "upload-comics" });
};

export const postUploadComics = async (req, res) => {
  const {
    body: { title, description },
    files: { noComicsFile },
    files: { comicsFile }
  } = req;
  const there = [];
  const here = [];
  comicsFile.forEach(function(comicBook) {
    const nice = comicBook.location;
    there.push(nice);
  });
  noComicsFile.forEach(function(comicBook) {
    const good = comicBook.location;
    here.push(good);
  });
  const newComics = await Comics.create({
    fileUrl: there[0],
    fileUrlOne: here[0],
    fileUrlTwo: here[1],
    fileUrlThree: here[2],
    fileUrlFour: here[3],
    fileUrlFive: here[4],
    fileUrlSix: here[5],
    fileUrlSeven: here[6],
    fileUrlEight: here[7],
    fileUrlNine: here[8],
    fileUrlTen: here[9],
    fileUrlEleven: here[10],
    fileUrlTwelve: here[11],
    fileUrlThirteen: here[12],
    fileUrlFourteen: here[13],
    fileUrlFifteen: here[14],
    title,
    description,
    creator: req.user.id
  });
  // file 값만 안 나왔던 이유.
  // multer에서 file 값의 다양한 하위 값들이 존재함
  // 따라서 file의 내용들을 알고 싶다면 개별적으로 변수를 적용해야 함. ex) const {file} = req
  req.user.comics.push(newComics.id);
  console.log(newComics.id);
  req.user.save();
  res.redirect(routes.comics);
};

export const getUploadIlluste = (req, res) =>
  res.render("uploadIlluste", { pageTitle: "upload-illuste" });

export const postUploadIlluste = async (req, res) => {
  const {
    body: { title, description },
    files: { illusteFile },
    files: { noIllusteFile }
  } = req;
  console.log(illusteFile);
  console.log(noIllusteFile);
  const here = [];
  const there = [];
  illusteFile.forEach(function(illustration) {
    const nice = illustration.location;
    there.push(nice);
  });
  noIllusteFile.forEach(function(illustration) {
    const good = illustration.location;
    here.push(good);
  });
  const newIlluste = await Illuste.create({
    fileUrl: there[0],
    fileUrlOne: here[0],
    fileUrlTwo: here[1],
    fileUrlThree: here[2],
    fileUrlFour: here[3],
    fileUrlFive: here[4],
    fileUrlSix: here[5],
    fileUrlSeven: here[6],
    fileUrlEight: here[7],
    fileUrlNine: here[8],
    fileUrlTen: here[9],
    fileUrlEleven: here[10],
    fileUrlTwelve: here[11],
    fileUrlThirteen: here[12],
    fileUrlFourteen: here[13],
    fileUrlFifteen: here[14],
    title,
    description,
    creator: req.user.id
  });
  req.user.illuste.push(newIlluste);
  req.user.save();
  res.redirect(routes.illuste);
};

export const getUploadSketch = (req, res) =>
  res.render("uploadSketch", { pageTitle: "upload-sketch" });

export const postUploadSketch = async (req, res) => {
  const {
    body: { title, description },
    files: { sketchFile },
    files: { noSketchFile }
  } = req;
  console.log(noSketchFile);
  const there = [];
  const here = [];
  sketchFile.forEach(function(sketch) {
    const nice = sketch.location;
    there.push(nice);
  });
  noSketchFile.forEach(function(sketch) {
    const good = sketch.location;
    here.push(good);
  });
  const newSketch = await Sketch.create({
    fileUrl: there[0],
    fileUrlOne: here[0],
    fileUrlTwo: here[1],
    fileUrlThree: here[2],
    fileUrlFour: here[3],
    fileUrlFive: here[4],
    fileUrlSix: here[5],
    fileUrlSeven: here[6],
    fileUrlEight: here[7],
    fileUrlNine: here[8],
    fileUrlTen: here[9],
    fileUrlEleven: here[10],
    fileUrlTwelve: here[11],
    fileUrlThirteen: here[12],
    fileUrlFourteen: here[13],
    fileUrlFifteen: here[14],
    title,
    description,
    creator: req.user.id
  });
  req.user.sketch.push(newSketch);
  req.user.save();
  res.redirect(routes.sketch);
};

export const getUploadNotice = async (req, res) =>
  res.render("uploadNotice", { pageTitle: "upload-notice" });

export const postUploadNotice = async (req, res) => {
  const {
    body: { title, description },
    files: { noticeFile },
    files: { noNoticeFile }
  } = req;
  const replace = description.replace(/\r?\n/g, "<br />");
  const there = [];
  const here = [];
  noticeFile.forEach(function(notice) {
    const nice = notice.location;
    there.push(nice);
  });
  noNoticeFile.forEach(function(notice) {
    const good = notice.location;
    here.push(good);
  });
  const newNotice = await Notice.create({
    fileUrl: there[0],
    fileUrlOne: here[0],
    fileUrlTwo: here[1],
    fileUrlThree: here[2],
    fileUrlFour: here[3],
    fileUrlFive: here[4],
    fileUrlSix: here[5],
    fileUrlSeven: here[6],
    fileUrlEight: here[7],
    fileUrlNine: here[8],
    fileUrlTen: here[9],
    fileUrlEleven: here[10],
    fileUrlTwelve: here[11],
    fileUrlThirteen: here[12],
    fileUrlFourteen: here[13],
    fileUrlFifteen: here[14],
    title,
    description: replace,
    creator: req.user.id
  });
  req.user.notice.push(newNotice);
  req.user.save();
  res.redirect(routes.notice);
};

export const getUploadBackground = (req, res) => {
  res.render("uploadBackground", { pageTitle: "upload-background" });
};

export const postUploadBackground = async (req, res) => {
  const {
    body: { title, description },
    files: { oneBackgroundFile }
  } = req;
  const here = [];
  oneBackgroundFile.forEach(function(back) {
    const good = back.location;
    here.push(good);
  });
  await Back.findOneAndUpdate({
    fileUrlOne: here[0],
    fileUrlTwo: here[1],
    fileUrlThree: here[2],
    fileUrlFour: here[3]
  });
  res.redirect(routes.home);
};
