import { Schema, model, models } from "mongoose";

export interface ICategory {
  _id: string;
  name: string;
}

const MenteeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Mentee = models.Mentee || model("Mentee", MenteeSchema);

export default Mentee;
