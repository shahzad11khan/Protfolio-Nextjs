import { NextResponse } from "next/server";
import Dbconnect from "@/lib/db"; // Ensure correct path and use curly braces
import Project from "@/lib/models/project";
import MessageSend from "@/lib/models/message";

// get all projects
export async function GET() {
  try {
    // Connect to the database
    await Dbconnect;
    try {
      const All_Projects = await Project.find();

      if (!All_Projects) {
        return NextResponse.json({ result: "No Project Availible" });
      } else {
        return NextResponse.json({ result: All_Projects });
      }
    } catch (error) {
      console.error(error);
    }
    return;
    // Database connected, return response
    return NextResponse.json({ result: "hi there" });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    // Handle error, maybe return an error response
    return NextResponse.error(new Error("Failed to connect to the database."));
  }
}

// post project
export async function POST(Request) {
  const givingdata = await Request.json();
  const { image, category } = givingdata;
  try {
    await Dbconnect;
    const Post_Project = new Project({
      image: image,
      category: category,
    });
    const Save_Project = await Post_Project.save();
    if (!Save_Project) {
      return NextResponse.json({ message: "Project Not added" });
    } else {
      return NextResponse.json({ result: Save_Project, status: 200 });
    }
  } catch (error) {
    console.error(error);
  }
}
