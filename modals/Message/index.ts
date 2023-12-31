import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    content: String,
    fileUrl: String,
    member: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
    },
    channel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel",
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Message =
  mongoose.models.messages || mongoose.model("Message", messageSchema);

export default Message;
