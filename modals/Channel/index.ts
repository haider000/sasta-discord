import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
  name: String,
  type: { type: String, enum: ["TEXT", "AUDIO", "VIDEO"], default: "TEXT" },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
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
});

const Channel =
  mongoose.models.channels || mongoose.model("Channel", channelSchema);

export default Channel;
