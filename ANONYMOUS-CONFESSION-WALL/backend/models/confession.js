import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    default: "Anonymous"
  },
  userPhoto: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const confessionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  secretCode: {
    type: String,
    required: true,
    minlength: 4
  },
  reactions: {
    like: { type: Number, default: 0 },
    dislike: { type: Number, default: 0 },
    love: { type: Number, default: 0 },
    laugh: { type: Number, default: 0 }
  },
  userId: {
    type: String,
    required: true
  },
  comments: {
    type: [commentSchema],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Confession = mongoose.model("Confession", confessionSchema);
export default Confession;