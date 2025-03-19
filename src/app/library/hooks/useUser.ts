"use client";

import { useEffect, useState } from "react";
import { fetchUserData } from "../api/user";
import { User } from "../types/user";

export function useUser(userId: number) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const userData = await fetchUserData(userId);
      setUser(userData);
      setLoading(false);
    };

    getUser();
  }, [userId]);

  return { user, loading };
}
