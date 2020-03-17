import routes from "../routes";
import Notice from "../models/Notice";
import Comment from "../models/Comment";

export const notice = async (req, res) => {
  try {
    const notice = await Notice.find({}).sort({ _id: -1 });
    res.render("notice", { pageTitle: "Notice", notice });
  } catch (error) {
    res.render("notice", { pageTitle: "Notice", notice: [] });
  }
};

export const noticeDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  const hello = [];
  const newNotice = await Notice.find();
  newNotice.forEach(function(e) {
    const hi = e.id;
    hello.push(hi);
  });
  const wow = hello.indexOf(id);
  const length = newNotice.length;
  try {
    const notice = await Notice.findById({ _id: id })
      .populate("creator")
      .populate("comments");
    res.render("noticeDetail", {
      pageTitle: "notice-detail",
      notice,
      newNotice,
      wow,
      length
    });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditNotice = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const notice = await Notice.findById(id);
    if (String(notice.creator) !== req.user.id) {
      throw Error();
    } else {
      res.render("editNotice", { pageTitle: "edit-notice", notice });
    }
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditNotice = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await Notice.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.noticeDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteNotice = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const notice = await Notice.findById(id);
    if (String(notice.creator) !== req.user.id) {
      throw Error();
    } else {
      await Notice.findOneAndRemove({ _id: id }).sort({ _id: -1 });
      res.render("notice", { pageTitle: "notice", notice });
    }
  } catch (error) {}
  res.redirect(routes.home);
};

export const postNoticeRegisterView = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const notice = await Notice.findById({ _id: id });
    notice.views += 1;
    notice.save();
    res.status(200);
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

export const postNoticeComment = async (req, res) => {
  const {
    params: { id },
    body: { reply },
    user
  } = req;
  try {
    const notice = await Notice.findById(id);
    const newComment = await Comment.create({
      text: reply,
      creator: user.id
    });
    notice.comments.push(newComment.id);
    notice.save();
    res.send(newComment);
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

export const postNoticeCommentDelete = async (req, res) => {
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
