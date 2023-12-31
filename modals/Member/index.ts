import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["ADMIN", "MODERATOR", "GUEST"],
      default: "GUEST",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    server: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Server",
    },
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
    directMessages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DirectMessage",
      },
    ],
    conversationsInitiated: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conversation",
        field: "memberOneId",
      },
    ],
    conversationsReceived: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conversation",
        field: "memberTwoId",
      },
    ],
  },
  { timestamps: true }
);

const Member =
  mongoose.models.members || mongoose.model("Member", memberSchema);

export default Member;
