import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import Lecturer from "@/models/lecturer";
export async function POST(request: Request) {
  try {
    const { username, password, firstname, lastname, title } =
      await request.json();
    await connectToDB();
    Lecturer.create({
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      title: title,
      role: "lecturer",
    });
    // YOU MAY WANT TO ADD SOME VALIDATION HERE

    console.log("new lecturer", { username, password });
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}
