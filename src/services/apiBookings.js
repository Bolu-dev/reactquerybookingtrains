import supabase from "./supabase";

export async function createBooking(newBooking) {
  const { data, error } = await supabase
    .from("bookings")
    .insert([newBooking])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be created");
  }

  return data;
}

export async function getBookings(userId) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, trains(*)") // gets booking + train details
    .eq("userId", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return data;
}

export async function cancelBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .update({ status: "cancelled" })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be cancelled");
  }

  return data;
}