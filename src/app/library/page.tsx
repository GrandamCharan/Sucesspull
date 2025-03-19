"use client"; // ✅ Ensure it's a client component

import CourseList from "./components/CourseList/courseList";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import SearchBar from "./components/SearchBar";
import SidebarToggle from "./components/Sidebar/SidebarToggle";
import UserProfile from "./components/UserProfile";
import { useCourses } from "./hooks/useCourses";

export default function Library() {
  const { filteredCourses, handleFilter, loading, error } = useCourses();

  return (
    <SidebarToggle>
      <div className="flex flex-col md:flex-row justify-between gap-6 mt-6 px-4">
        {/* Left Section: Heading, Search Bar, and Course List */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-7xl md:text-4xl sm:text-3xl font-bold">
              Library / Learning Center
            </h1>
            <p className="text-lg md:text-base sm:text-sm text-gray-600 pt-3">
              Embark on Your Learning Adventure – Earn Points, Unlock Knowledge,
              and Grow!
            </p>
          </div>

          {/* Search Bar */}
          <SearchBar onFilter={handleFilter} />

          {/* Show error message if fetching fails */}
          {error && <ErrorMessage error={error} />}

          {/* Show loading spinner while fetching data */}
          {loading ? (
            <Loader message="Loading courses..." />
          ) : (
            <CourseList courses={filteredCourses} />
          )}
        </div>

        {/* Right Section: User Profile */}
        <div className="flex justify-center md:justify-end">
          <UserProfile />
        </div>
      </div>
    </SidebarToggle>
  );
}
