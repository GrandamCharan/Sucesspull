"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function SidebarToggle({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar Component */}
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Floating Toggle Button (Only Shows When Sidebar is Closed) */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="absolute top-2 left-2 p-2 rounded-md bg-white shadow-md"
          aria-label="Open Sidebar"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      )}

      {/* Main Content */}
      <div
        className={`flex-1 p-6 bg-gray-50 min-h-screen transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
