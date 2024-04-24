import Dbconnect from "@/lib/db";
import MessageSend from "@/lib/models/message";
import { NextResponse } from "next/server";

// PUT function to Update a project
export async function PUT(request, content) {
  try {
    //  variable              foldername --> dynomic route
    const id = content.params.messageID;
    console.log(id);
    const _givingdata = await request.json();
    const { SenderEmail, SenderMessage } = _givingdata;
    console.log(SenderEmail, SenderMessage);

    // Find the project by ID and update its image and category
    const _updatedmessage = await MessageSend.findByIdAndUpdate(
      id,
      { SenderEmail, SenderMessage },
      { new: true }
    );

    // Check if the project was found and updated
    if (!_updatedmessage) {
      return NextResponse.json(
        { message: "Message not found" },
        { status: 404 }
      );
    } else {
    }
    return NextResponse.json({ result: _updatedmessage }, { status: 200 });
  } catch (error) {
    console.error("Error Updating Message:", error);
    // Return an error response
    return NextResponse.error(new Error("Failed to update project"), {
      status: 500,
    });
  }
}

// DELETE function to delete a project
export async function DELETE(reques, content) {
  try {
    // console.log(content.params.projectID);
    const id = content.params.messageID;
    // Connect to the database
    await Dbconnect;

    // Find the project by ID and delete it
    const _deletedMessage = await MessageSend.findByIdAndDelete(id);

    // Check if the project was found and deleted
    if (!_deletedMessage) {
      return NextResponse.json({ message: "Project not found" });
    } else {
      return NextResponse.json({ result: _deletedMessage, status: 200 });
    }
  } catch (error) {
    console.error("Error deleting project:", error);
    // Return an error response
    return NextResponse.error(new Error("Failed to delete project"));
  }
}
