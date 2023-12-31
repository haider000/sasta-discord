import mongoose from "mongoose";

const directMessageSchema = new mongoose.Schema({
  content: String,
  fileUrl: String,
  member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
  },
  conversation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Conversation",
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

const DirectMessage =
  mongoose.models.directmessages ||
  mongoose.model("DirectMessage", directMessageSchema);

export default DirectMessage;
