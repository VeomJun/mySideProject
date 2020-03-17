import mongoose from "mongoose";

const BackSchema = mongoose.Schema({
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
  }
});

const model = mongoose.model("Back", BackSchema);

export default model;
