// mongodb에 우리가 사용할 파일들이 어떠한 형식으로 생겼는지
// 알려주어야 한다.

import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema({
  fileUrl: {
    type: String
  },
  fileUrlOne: {
    type: String
  },
  fileUrlTwo: {
    type: String
  },
  fileUrlThree: {
    type: String
  },
  fileUrlFour: {
    type: String
  },
  fileUrlFive: {
    type: String
  },
  fileUrlSix: {
    type: String
  },
  fileUrlSeven: {
    type: String
  },
  fileUrlEight: {
    type: String
  },
  fileUrlNine: {
    type: String
  },
  fileUrlTen: {
    type: String
  },
  fileUrlEleven: {
    type: String
  },
  fileUrlTwelve: {
    type: String
  },
  fileUrlThirteen: {
    type: String
  },
  fileUrlFourteen: {
    type: String
  },
  fileUrlFifteen: {
    type: String
  },
  title: {
    type: String,
    required: "Title is not required"
  },
  description: String,
  views: {
    type: Number,
    default: 0
    // views의 default를 0으로 해 놓음으로써 view의 첫 시작은 0으로 되게 한다.
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});
// schema는 우리가 선택적으로 받아서 처리할 데이터들의 형태를
// 정할 수 있는 것을 의미하며, 쉽게 말해 model이 data를 담는
// 큰 그릇이라고 하면, schema는 데이터의 형식이라 할 수 있다.(또는 definition)

const model = mongoose.model("Notice", NoticeSchema);
export default model;
