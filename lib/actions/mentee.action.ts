import { connectToDatabase } from "../database";
import Mentee from "../database/models/mentee.model";

export const getAllMentees = async () => {
  try {
    await connectToDatabase();
    const mentees = await Mentee.find();
    return JSON.parse(JSON.stringify(mentees));
  } catch (error: any) {
    return JSON.parse(JSON.stringify({ error: error.message, status: 500 }));
  }
};
