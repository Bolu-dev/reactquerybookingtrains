import supabase, { supabaseUrl } from "./supabase";

export async function signup({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { fullName },
    },
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  return data?.user;
}

export async function updateUser({ fullName, email, password, avatar }) {
  // Build update object based on what's being updated
  let updateData = {};
  if (fullName) updateData = { data: { fullName } };
  if (email) updateData = { ...updateData, email };
  if (password) updateData = { ...updateData, password };

  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);

  // Upload avatar if provided
  if (!avatar) return data;

  const fileName = `avatar-${data.user.id}`;

  const { error: storageError } = await supabase.storage
    .from("avatar")
    .upload(fileName, avatar, { upsert: true });

  if (storageError) throw new Error(storageError.message);

  // Save avatar URL to user metadata
  const avatarUrl = `${supabaseUrl}/storage/v1/object/public/avatar/${fileName}`;

  const { data: updatedUser, error: updateError } =
    await supabase.auth.updateUser({
      data: { fullName, avatar: avatarUrl },
    });

  if (updateError) throw new Error(updateError.message);
  return updatedUser;
}
