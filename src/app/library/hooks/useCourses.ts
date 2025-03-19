"use client"; // ✅ Fix: Mark this file as a client component

import { useEffect, useState } from "react";
import { fetchCourses } from "../api/courses";
import { Course } from "../types/course";

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCourses = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchCourses();
        setCourses(data);
        setFilteredCourses(data);
      } catch (err) {
        setError("Failed to load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getCourses();
  }, []);

  // Filtering logic
  const handleFilter = (query: string, selectedTags: string[]) => {
    let filtered = courses;

    if (query) {
      filtered = filtered.filter((course) =>
        course.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((course) =>
        selectedTags.some((tag) => course.tags.includes(tag))
      );
    }

    setFilteredCourses(filtered);
  };

  return { courses, filteredCourses, handleFilter, loading, error };
}
