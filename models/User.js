import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
// passport-local-mongoose를 이용하여 현재 로그인한 사람의 정보를
// req.user 상에 저장 시켜 놓을 수 있다. (다른 db들과 유일하게 다른점, passport-local-mongoose)
//

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  naverId: Number,
  kakaoId: Number,
  description: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  comics: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comics"
    }
  ],
  illuste: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Illuste"
    }
  ],
  notice: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Notice"
    }
  ],
  sketch: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sketch"
    }
  ]
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);
export default model;
