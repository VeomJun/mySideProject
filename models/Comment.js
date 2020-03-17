import mongoose from "mongoose";

const CommemtSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "text is required."
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const model = mongoose.model("Comment", CommemtSchema);
export default model;
