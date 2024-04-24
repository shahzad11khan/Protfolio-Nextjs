import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
  image: String,
  category: String,
});
const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default Project;
