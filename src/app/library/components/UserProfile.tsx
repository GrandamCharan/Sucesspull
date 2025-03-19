"use client";

import Image from "next/image";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import { useUser } from "../hooks/useUser";
import { getCrown } from "../utils/userHelper";

export default function UserProfile() {
  const userId = 1; // Modify as needed (e.g., fetch from auth state)
  const { user, loading } = useUser(userId);

  if (loading) return <Loader message="Fetching user data..." />;
  if (!user) return <ErrorMessage error="Error loading user data." />;

  const crown = getCrown(user.level);

  return (
    <div className="flex flex-col items-center space-y-4 w-40 md:w-auto">
      {/* Profile Image with Crown */}
      <div className="relative w-24 h-24">
        {/* Crown Above Profile */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-10deg]">
          <Image
            src={crown.src}
            alt={crown.title}
            width={30}
            height={30}
            title={crown.title}
          />
        </div>

        {/* Circular Profile Picture */}
        <div className="w-24 h-24 rounded-full border-4 border-gray-300 flex items-center justify-center bg-white overflow-hidden relative">
          <Image
            src={user.avatar_url}
            alt="User Avatar"
            width={80}
            height={80}
            className="rounded-full object-cover w-full h-full"
          />
          <div
            className={`absolute bottom-1 px-3 py-0.5 text-xs font-semibold text-white ${crown.bg} rounded-full`}
          >
            {crown.title}
          </div>
        </div>
      </div>

      {/* Points Earned */}
      <div className="rounded-md shadow-md w-32">
        <div className="bg-gray-300 p-2 text-center rounded-t-md">
          <p className="text-xs text-black font-semibold">Today, You Earned</p>
        </div>
        <div className="bg-white p-3 text-center rounded-b-md">
          <p className="text-2xl font-bold">{user.points_today}</p>
          <span className="text-xs text-gray-500">pts</span>
        </div>
      </div>
    </div>
  );
}
