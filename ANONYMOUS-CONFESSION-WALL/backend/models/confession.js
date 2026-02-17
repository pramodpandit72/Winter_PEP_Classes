import mongoose from "mongoose"

const confessionSchema = new mongoose.Schema({
  text: String,
  secretCode: String,
  reactions: {
    like: { type: Number, default: 0 },
    love: { type: Number, default: 0 },
    laugh: { type: Number, default: 0 }
  },
  userId: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Confession", confessionSchema);