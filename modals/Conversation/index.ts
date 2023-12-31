import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    memberOne: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
    },
    memberTwo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
    },
    directMessages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DirectMessage",
      },
    ],
  },
  { timestamps: true }
);

conversationSchema.index({ memberOne: 1, memberTwo: 1 }, { unique: true });

const Conversation =
  mongoose.models.conversations ||
  mongoose.model("Conversation", conversationSchema);

export default Conversation;
