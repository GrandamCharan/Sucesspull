// src/app/library/components/Sidebar/sidebarLinks.ts

import {
  Book,
  Briefcase,
  Home,
  LifeBuoy,
  LogOut,
  PlaySquare,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";

export const NAV_LINKS = [
  { name: "Portal", href: "/portal", icon: Home },
  { name: "Library", href: "/library", icon: Book },
  { name: "Live!", href: "/live", icon: PlaySquare },
  { name: "Chapters", href: "/chapters", icon: Users },
  { name: "Job Connect", href: "/job-connect", icon: Briefcase },
  { name: "Shop Discount", href: "/shop-discount", icon: ShoppingCart },
];

export const BOTTOM_LINKS = [
  { name: "Support", href: "/support", icon: LifeBuoy },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Logout", href: "/logout", icon: LogOut, danger: true },
];
