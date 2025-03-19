"use client";

import { useEffect, useRef, useState } from "react";
import {
  availableTags,
  courseDurations,
  courseFormats,
} from "../utils/searchOptions";

export function useSearch(onFilter: (query: string, tags: string[]) => void) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const updateFilter = (query: string, tags: string[]) => {
    setSearchQuery(query);
    setSelectedTags(tags);
    onFilter(query, tags);
  };

  const toggleTag = (tag: string) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    updateFilter(searchQuery, updatedTags);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
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
  };
}
