import { connectToDB } from "@/utils/database";
import Course from "@/models/course";

export const GET = async (request: any) => {
  try {
    await connectToDB();
    const course = await Course.find({});

    return new Response(JSON.stringify(course), { status: 200 });
  } catch (error) {
    return new Response("failed to load all prompts", { status: 500 });
  }
};
