import routes from "../routes";
import Sketch from "../models/Sketch";
import Comics from "../models/Comics";
import Illuste from "../models/Illuste";
import Comment from "../models/Comment";

export const sketch = async (req, res) => {
  try {
    const sketch = await Sketch.find({}).sort({ _id: -1 });
    res.render("sketch", { pageTitle: "sketch", sketch });
  } catch (error) {
    res.render("sketch", { pageTitle: "sketch", sketch: [] });
  }
};

export const sketchDetail = async (req, res) => {
  // 위 명령을 통해 해당 페이지가 지니고 있는 url 상의 id를 얻을 수 있다.
  // 왜냐하면, routes.js에서 우리가 해당 페이지에 :id를 설정해 주어서
  // 이 id 값을 주시하게 해 주었기 때문이다.
  // 즉, url상에 해당 :id에 오는 값을 불러 올 수 있는 것이다.
  // 그리고 이 방법이 url로부터 정보를 가져오는 유일한 방법이다.
  const {
    params: { id }
  } = req;
  const hi = [];
  const newSketch = await Sketch.find();
  newSketch.forEach(function(e) {
    const hello = e.id;
    hi.push(hello);
  });
  const wow = hi.indexOf(id);
  const length = newSketch.length;
  try {
    const sketch = await Sketch.findById(id)
      .populate("creator")
      .populate("comments");
    res.render("sketchDetail", {
      pageTitle: "sketch-detail",
      sketch,
      wow,
      length,
      newSketch
    });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditSketch = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const sketch = await Sketch.findById(id);
    if (String(sketch.creator) !== req.user.id) {
      throw Error();
    } else {
      res.render("editSketch", { pageTitle: "edit-sketch", sketch });
    }
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditSketch = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await Sketch.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.sketchDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteSketch = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const sketch = await Sketch.findById(id);
    if (String(sketch.creator) !== req.user.id) {
      throw Error();
    } else {
      await Sketch.findOneAndRemove({ _id: id }).sort({ _id: -1 });
      res.render("sketch", { pageTitle: "sketch", sketch });
    }
  } catch (error) {}
  res.redirect(routes.home);
};

///////////////////////////////////////////////////////

export const comics = async (req, res) => {
  try {
    const comics = await Comics.find({}).sort({ _id: -1 });
    res.render("comics", { pageTitle: "comics", comics });
  } catch (error) {
    res.render("comics", { pageTitle: "comics", comics: [] });
  }
};

export const comicsDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  const hello = [];
  const newComics = await Comics.find();
  newComics.forEach(function(e) {
    const hi = e.id;
    hello.push(hi);
  });
  const wow = hello.indexOf(id);
  const length = newComics.length;
  try {
    const comics = await Comics.findById(id)
      .populate("creator")
      .populate("comments");
    // populate는 오직 objectId 타입에만 사용할 수 있다.
    // 우리의 경우에는 'creator'에 사용한다.
    // 이를 통해 우리는 creator로 부터 id 뿐만이 아니라
    // 해당 유저의 다양한 정보를 가져올 수 있다.
    res.render("comicsDetail", {
      pageTitle: "comics-detail",
      comics,
      newComics,
      wow,
      length,
      user: req.user
    });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditComics = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const comics = await Comics.findById(id);
    if (String(comics.creator) !== req.user.id) {
      throw Error();
    } else {
      res.render("editComics", { pageTitle: "edit-comics", comics });
    }
    // pageTitle 뒤, 우리는 이런 식으로 template에 data를 보내는 것이다.
    // 그리고 템플릿은 이런 데이터를 받아서 이용(화면상에 표시)할 수 있다.
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditComics = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await Comics.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.comicsDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteComics = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const comics = await Comics.findById(id);
    if (String(comics.creator) !== req.user.id) {
      throw Error();
    } else {
      await Comics.findOneAndRemove({ _id: id }).sort({ _id: -1 });
      res.render("comics", { pageTitle: "comics", comics });
    }
  } catch (error) {}
  res.redirect(routes.home);
};

///////////////////////////////////////////////////////

export const illuste = async (req, res) => {
  try {
    const illuste = await Illuste.find({}).sort({ _id: -1 });
    res.render("illuste", { pageTitle: "illuste", illuste });
  } catch (error) {
    res.render("illuste", { pageTitle: "illuste", illuste: [] });
  }
};

export const illusteDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  const hello = [];
  const newIlluste = await Illuste.find();
  newIlluste.forEach(function(e) {
    const hi = e.id;
    hello.push(hi);
  });
  const wow = hello.indexOf(id);
  const length = newIlluste.length;
  try {
    const illuste = await Illuste.findById(id)
      .populate("creator")
      .populate("comments");
    res.render("illusteDetail", {
      pageTitle: "illuste-detail",
      illuste,
      newIlluste,
      wow,
      length
    });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditIlluste = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const illuste = await Illuste.findById(id);
    res.render("editIlluste", { pageTitle: "edit-illuste", illuste });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditIlluste = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await Illuste.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.illusteDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteIlluste = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const illuste = await Illuste.findById(id);
    if (String(illuste.creator) !== req.user.id) {
      throw Error();
    } else {
      await Illuste.findOneAndRemove({ _id: id }).sort({ _id: -1 });
      res.render("illuste", { pageTitle: "illuste", illuste });
    }
  } catch (error) {}
  res.redirect(routes.home);
};

// Register Views

export const postComicsRegisterView = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const comics = await Comics.findById(id);
    comics.views += 1;
    comics.save();
    res.status(200);
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
    //일반적인 controlloer의 경우에는 렌더링이 존재함으로
    // 함수의 과정의 끝을 명시하지 않는다.
    // 하지만, api의 경우에는 함수가 중간 과정이므로
    // res.end()를 통해 그 과정의 끝을 명시해 주어야만
    // 이후의 과정이 정상적으로 진행될 수 있다.
  }
};

export const postAddComment = async (req, res) => {
  const {
    params: { id },
    body: { reply },
    user
  } = req;
  try {
    const comics = await Comics.findById(id);
    const newComments = await Comment.create({
      text: reply,
      creator: user.id
    });
    comics.comments.push(newComments.id);
    //comments는 objectId 형태로 저장해 놓았기 때문에 id 형태로만 저장해 놓으면, 이 id를 통해 해당 comment를 찾을 수 있다.
    comics.save();
    res.send(JSON.stringify(newComments)); // 어찌됐는 이 과정을 통해 api로부터 프로트엔드로 새로 만든 comment의 정보를 보낼 수 있다.
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

export const postCommentDelete = async (req, res) => {
  const {
    params: { id },
    user
  } = req;
  try {
    const comics = await Comment.findById(id);
    if (String(comics.creator) !== user.id) {
      throw Error();
    } else {
      await Comment.findOneAndRemove({ _id: id });
    }
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

/////////////////////////////////////////

export const postIllusteRegisterView = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const illuste = await Illuste.findById({ _id: id });
    illuste.views += 1;
    illuste.save();
    res.status(200);
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

export const postIllusteComment = async (req, res) => {
  const {
    params: { id },
    body: { reply },
    user
  } = req;
  const illuste = await Illuste.findById({ _id: id });
  console.log(illuste);
  try {
    const illuste = await Illuste.findById(id);
    const newComment = await Comment.create({
      text: reply,
      creator: user.id
    });
    illuste.comments.push(newComment.id);
    illuste.save();
    res.send(newComment);
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

export const postIllusteCommentDelete = async (req, res) => {
  const {
    params: { id },
    user
  } = req;
  try {
    await Comment.findOneAndRemove({ _id: id });
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

///////////////////////////////////////////////////

export const postSketchRegisterView = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const sketch = await Sketch.findById({ _id: id });
    sketch.views += 1;
    sketch.save();
    res.status(200);
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

export const postSketchComment = async (req, res) => {
  const {
    params: { id },
    body: { reply },
    user
  } = req;
  try {
    const sketch = await Sketch.findById(id);
    const newComment = await Comment.create({
      text: reply,
      creator: user.id
    });
    sketch.comments.push(newComment.id);
    sketch.save();
    res.send(newComment);
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

export const postSketchCommentDelete = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Comment.findOneAndRemove({ _id: id });
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};
// try catch와 if else 의 차이점은 오류를 기점으로 하는 행동이라 할 수 있다.
// try catch는 try에 행동을 설정해 놓고, 해당 설정에서 오류가 발생했을 때
// 행동을 따로 설정할 수 있다. 이를 통해 해당 오류가 무엇인지 또한 알 수 있다.
// 반면 if else는 오류가 발생하면 진행 자체가 끊겨버리게 된다.
