import mongoose from "mongoose";

const MessageSchema = mongoose.Schema({
  SenderEmail: String,
  SenderMessage: String,
});
const MessageSend =
  mongoose.models.Message || mongoose.model("Message", MessageSchema);

export default MessageSend;
