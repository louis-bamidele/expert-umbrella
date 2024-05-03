import { Schema, model, models } from "mongoose";

const LecturerShema = new Schema({
  username: {
    type: String,
    unique: [true, "username already exists!"],
    required: [true, "username is  required!"],
  },
  password: {
    type: String,
    required: [true, "password is required!"],
  },
  firstname: {
    type: String,
    required: [true, "firstname is required!"],
  },
  lastname: {
    type: String,
    required: [true, "lastname is required!"],
  },
  title: {
    type: String,
    required: [true, "title is required!"],
  },
  role: {
    type: String,
    required: [true, "title is required!"],
  },
});

const Lecturer = models.Lecturer || model("Lecturer", LecturerShema);

export default Lecturer;
