import supabase from "../../lib/supabaseClient";
import { User } from "../types/user";

export async function fetchUserData(userId: number): Promise<User | null> {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}
