import mongoose from "mongoose";

const SketchSchema = new mongoose.Schema({
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

const model = mongoose.model("Sketch", SketchSchema);
export default model;
