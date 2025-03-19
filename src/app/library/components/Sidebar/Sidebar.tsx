import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BOTTOM_LINKS, NAV_LINKS } from "./SidebarLinks";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-gray-100 shadow-md transition-all duration-300 ${
        isOpen ? "w-64 p-6" : "w-0 p-0"
      }`}
      role="navigation"
      aria-label="Sidebar"
    >
      {isOpen && (
        <div className="flex flex-col justify-between h-full">
          {/* Header */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <Image
                src="/images/IEJL_logo.png"
                alt="IEJL Logo"
                width={50}
                height={50}
              />
              <button
                onClick={toggleSidebar}
                className="p-1 rounded-md hover:bg-gray-200"
                aria-label="Close Sidebar"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-2">
              {NAV_LINKS.map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-200 space-x-3"
                >
                  <Icon className="w-5 h-5 text-gray-700" />
                  <span>{name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Bottom Links */}
          <div className="space-y-2 pb-4">
            {BOTTOM_LINKS.map(({ name, href, icon: Icon, danger }) => (
              <Link
                key={name}
                href={href}
                className={`flex items-center px-4 py-2 rounded-lg hover:bg-${
                  danger ? "red-200" : "blue-200"
                } space-x-3`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    danger ? "text-red-600" : "text-gray-700"
                  }`}
                />
                <span className={danger ? "text-red-600" : ""}>{name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
