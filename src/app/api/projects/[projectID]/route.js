import Dbconnect from "@/lib/db";
import Project from "@/lib/models/project";
import { NextResponse } from "next/server";

// PUT function to Update a project
export async function PUT(request, content) {
  try {
    //  variable              foldername --> dynomic route
    const id = content.params.projectID;
    console.log(id);
    const givingdata = await request.json();
    const { image, category } = givingdata;
    console.log(image, category);

    // Find the project by ID and update its image and category
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { image, category },
      { new: true }
    );

    // Check if the project was found and updated
    if (!updatedProject) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    } else {
    }
    return NextResponse.json({ result: updatedProject }, { status: 200 });
  } catch (error) {
    console.error("Error updating project:", error);
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
    const id = content.params.projectID;
    // Connect to the database
    await Dbconnect;

    // Find the project by ID and delete it
    const deletedProject = await Project.findByIdAndDelete(id);

    // Check if the project was found and deleted
    if (!deletedProject) {
      return NextResponse.json({ message: "Project not found" });
    } else {
      return NextResponse.json({ result: deletedProject, status: 200 });
    }
  } catch (error) {
    console.error("Error deleting project:", error);
    // Return an error response
    return NextResponse.error(new Error("Failed to delete project"));
  }
}
