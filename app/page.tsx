import { getAllMentees } from "@/lib/actions/mentee.action";

export default async function Home() {
  const mentees = await getAllMentees();
  return <>{JSON.stringify(mentees)}</>;
}
