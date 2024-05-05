import { connectToDB } from "@/utils/database";
import Lecturer from "@/models/lecturer";
export const dynamic = "force-dynamic";
export const GET = async (request: any) => {
  try {
    await connectToDB();
    const course = await Lecturer.find({});

    return new Response(JSON.stringify(course), { status: 200 });
  } catch (error) {
    return new Response("failed to load all prompts", { status: 500 });
  }
};
