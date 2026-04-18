import supabase from "./supabase";

export async function getTrains({ origin, destination }) {
  let query = supabase.from("trains").select("*");

  if (origin) query = query.ilike("origin", `%${origin}%`);
  if (destination) query = query.ilike("destination", `%${destination}%`);

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Trains could not be loaded");
  }

  return data;
}
