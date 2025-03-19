// src/app/library/api/courses.ts
import supabase from "../../lib/supabaseClient";
import { Course } from "../types/course"; // Importing TypeScript interface

export async function fetchCourses(): Promise<Course[]> {
  try {
    const { data, error } = await supabase.from("courses").select("*");

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (err) {
    console.error("Error fetching courses:", err);
    throw err;
  }
}
