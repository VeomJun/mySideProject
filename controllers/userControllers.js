import routes from "../routes";
import User from "../models/User";

export const users = (req, res) => res.render("users", { pageTitle: "users" });

export const getEditProfile = (req, res) => {
  res.render("editProfile", { pageTitle: "edit-profile" });
};

export const postEditProfile = async (req, res) => {
  const {
    body: { name, email, description },
    file
  } = req;
  try {
    await User.findByIdAndUpdate(req.user.id, {
      name,
      email,
      description,
      avatarUrl: file ? file.location : req.user.avatarUrl
    });
    res.redirect(routes.me);
  } catch (error) {
    res.redirect(`/users${routes.editProfile}`);
  }
};

export const getChangePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "change-password" });

export const postChangePassword = async (req, res) => {
  const {
    body: { oldPassword, newPassword, newPassword1 }
  } = req;
  try {
    if (newPassword !== newPassword1) {
      res.status(400);
      res.redirect(`/users${routes.changePassword}`);
      return;
    }
    await req.user.changePassword(oldPassword, newPassword);
    res.redirect(routes.me);
  } catch (error) {
    console.log(error);
    res.redirect(`/users${routes.changePassword}`);
  }
  res.redirect(routes.home);
};

export const userDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  const user = await User.findById({ _id: id });
  res.render("userDetail", { pageTitle: "user-detail", user });
};
