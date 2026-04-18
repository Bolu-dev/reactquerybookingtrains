import { useState } from "react";
import { useUser } from "../auth/useUser";
import { useUpdateUser } from "../auth/useUpdateUser";
import Button from "../../ui/Button";
import toast from "react-hot-toast";

function UpdateProfileForm() {
  const { user } = useUser();
  const { isPending, updateUserData } = useUpdateUser();

  const currentFullName = user?.user_metadata?.fullName;
  const currentAvatar = user?.user_metadata?.avatar;

  const [fullName, setFullName] = useState(currentFullName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  function handleAvatarChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    setAvatar(file);
    // Show preview before uploading
    setAvatarPreview(URL.createObjectURL(file));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (password && password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    updateUserData({
      fullName,
      email,
      password: password || undefined,
      avatar: avatar || undefined,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Avatar */}
      <div className="flex flex-col items-center gap-3">
        <img
          src={avatarPreview || currentAvatar || "/default-user.jpg"}
          alt="avatar"
          className="w-24 h-24 rounded-full object-cover border-4 border-train-orange/20"
        />
        <label className="cursor-pointer text-sm text-train-orange font-semibold hover:underline">
          Change Photo
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarChange}
            disabled={isPending}
          />
        </label>
      </div>

      {/* Full Name */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-train-dark">
          Full Name
        </label>
        <input
          type="text"
          value={fullName}
          disabled={isPending}
          onChange={(e) => setFullName(e.target.value)}
          className="rounded-full bg-train-orange-light px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-train-orange/20 placeholder:text-stone-400"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-train-dark">Email</label>
        <input
          type="email"
          value={email}
          disabled={isPending}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-full bg-train-orange-light px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-train-orange/20 placeholder:text-stone-400"
        />
      </div>

      {/* New Password */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-train-dark">
          New Password
        </label>
        <input
          type="password"
          value={password}
          disabled={isPending}
          placeholder="Leave blank to keep current"
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-full bg-train-orange-light px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-train-orange/20 placeholder:text-stone-400"
        />
      </div>

      {/* Confirm Password */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-train-dark">
          Confirm Password
        </label>
        <input
          type="password"
          value={confirmPassword}
          disabled={isPending}
          placeholder="Repeat new password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="rounded-full bg-train-orange-light px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-train-orange/20 placeholder:text-stone-400"
        />
      </div>

      {/* Submit */}
      <Button type="primary" disabled={isPending}>
        {isPending ? "Updating..." : "Update Profile"}
      </Button>
    </form>
  );
}

export default UpdateProfileForm;
