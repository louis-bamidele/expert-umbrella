import { Schema, model, models } from "mongoose";

const CourseShema = new Schema({
  coursetitle: {
    type: String,
    required: [true, "coursetitle is required!"],
  },
  coursecode: {
    type: String,
    required: [true, "coursecode is required!"],
  },
  unit: {
    type: Number,
    required: [true, "unit is required!"],
  },
  lecturer: {
    type: String,
    required: [true, "lecturer is required!"],
  },
  level: {
    type: Number,
    required: [true, "level is required!"],
  },
});

const Course = models.Course || model("Course", CourseShema);

export default Course;
