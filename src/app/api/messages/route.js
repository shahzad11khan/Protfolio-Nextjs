import { NextResponse } from "next/server";
import Dbconnect from "@/lib/db"; // Ensure correct path and use curly braces
import MessageSend from "@/lib/models/message";

// Get all Messages
export async function GET() {
  try {
    // Connect to the database
    await Dbconnect;
    try {
      const All_Messages = await MessageSend.find();

      if (!All_Messages) {
        return NextResponse.json({ result: "No Message Availible" });
      } else {
        return NextResponse.json({ result: All_Messages });
      }
    } catch (error) {
      console.error(error);
    }
    return;
    // Database connected, return response
    return NextResponse.json({ result: "Hi Message" });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    // Handle error, maybe return an error response
    return NextResponse.error(new Error("Failed to connect to the database."));
  }
}

// post project
export async function POST(Request) {
  const givingdata = await Request.json();
  // console.log({ givingdata });
  const { SenderEmail, SenderMessage } = givingdata;
  // console.log(SenderEmail, SenderMessage);

  try {
    await Dbconnect;
    const Post_Message = new MessageSend({
      SenderEmail: SenderEmail,
      SenderMessage: SenderMessage,
    });

    // console.log(Post_Message);
    const Save_Message = await Post_Message.save();
    if (!Save_Message) {
      return NextResponse.json({ message: "Message Not added" });
    } else {
      return NextResponse.json({ result: Save_Message, status: 200 });
    }
  } catch (error) {
    console.error(error);
  }
}
