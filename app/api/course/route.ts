import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import Course from "@/models/course";
export async function POST(request: Request) {
  try {
    const { coursetitle, coursecode, unit, lecturer, level } =
      await request.json();
    await connectToDB();
    Course.create({
      coursetitle: coursetitle,
      coursecode: coursecode,
      unit: unit,
      level: level,
      lecturer: lecturer,
    });
    // YOU MAY WANT TO ADD SOME VALIDATION HERE

    console.log("new Course", { coursetitle, lecturer });
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}
