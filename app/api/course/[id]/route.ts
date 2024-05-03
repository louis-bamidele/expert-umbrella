import { connectToDB } from "@/utils/database";
import Course from "@/models/course";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    console.log("id", params.id);
    await Course.findByIdAndDelete(params.id);

    return new Response(JSON.stringify(params.id), { status: 200 });
  } catch (error) {
    return new Response("failed to load all prompts", { status: 500 });
  }
};
