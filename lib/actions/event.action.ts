import { connectToDatabase } from "../database";
import Event from "../database/models/event.model";

export const getAllMentees = async () => {
  try {
    await connectToDatabase();
    const mentees = await Event.find();
    console.log({ mentees });
    return JSON.parse(JSON.stringify(mentees));
  } catch (error: any) {
    return JSON.parse(JSON.stringify({ error: error.message, status: 500 }));
  }
};
