"use client";

import { useSearch } from "../hooks/useSearch";

export default function SearchBar({
  onFilter,
}: {
  onFilter: (query: string, tags: string[]) => void;
}) {
  const {
    searchQuery,
    selectedTags,
    isExpanded,
    searchRef,
    updateFilter,
    toggleTag,
    setIsExpanded,
    availableTags,
    courseFormats,
    courseDurations,
  } = useSearch(onFilter);

  return (
    <div ref={searchRef} className="relative w-full">
      {/* Search Input (Expands filter on focus) */}
      <div
        className="bg-gray-100 p-3 rounded-lg shadow-md flex items-center space-x-2"
        onClick={() => setIsExpanded(true)}
      >
        <input
          type="text"
          placeholder="🔍 Search by Category, Course Format, Duration"
          value={searchQuery}
          onChange={(e) => updateFilter(e.target.value, selectedTags)}
          className="flex-1 bg-transparent outline-none text-gray-700"
        />
      </div>

      {/* Selected Tags */}
      {selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedTags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full cursor-pointer"
              onClick={() => toggleTag(tag)}
            >
              {tag} ✖
            </span>
          ))}
        </div>
      )}

      {/* Expandable Filters */}
      {isExpanded && (
        <div className="w-full bg-white shadow-lg p-4 rounded-md mt-2 transition-all duration-300">
          {/* Categories */}
          <h3 className="font-semibold text-sm mb-2">Subject/Category</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {availableTags.map((tag) => (
              <span
                key={tag.label}
                className={`px-3 py-1 rounded-full cursor-pointer text-sm ${
                  selectedTags.includes(tag.label)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
                onClick={() => toggleTag(tag.label)}
              >
                {tag.emoji} {tag.label}
              </span>
            ))}
          </div>

          {/* Course Format */}
          <h3 className="font-semibold text-sm mb-2">Course Format</h3>
          <div className="flex gap-2 mb-3">
            {courseFormats.map((format) => (
              <span
                key={format}
                className={`px-3 py-1 rounded-full cursor-pointer text-sm ${
                  selectedTags.includes(format)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
                onClick={() => toggleTag(format)}
              >
                {format}
              </span>
            ))}
          </div>

          {/* Course Duration */}
          <h3 className="font-semibold text-sm mb-2">Course Duration</h3>
          <div className="flex gap-2">
            {courseDurations.map((duration) => (
              <span
                key={duration}
                className={`px-3 py-1 rounded-full cursor-pointer text-sm ${
                  selectedTags.includes(duration)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
                onClick={() => toggleTag(duration)}
              >
                {duration}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
