"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/modetoggle";
import { Home, Briefcase, Folder } from "lucide-react"; // Import icons

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-5 w-5 mr-2 stroke-accent-foreground dark:stroke-slate-100" />, // Add icon
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <Folder className="h-5 w-5 mr-2 stroke-accent-foreground dark:stroke-slate-100" />, // Add icon
  },
  {
    name: "Experience",
    link: "/experience",
    icon: <Briefcase className="h-5 w-5 mr-2 stroke-accent-foreground dark:stroke-slate-100" />, // Add icon
  },
];

export function NavigationMenuDemo() {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList className="border-1 rounded-2xl p-1 bg-slate-100 shadow-md dark:bg-transparent">
        {navItems.map((item, i) => (
          <NavigationMenuItem key={i}>
            <Link href={item.link} legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} flex items-center flex-row ${
                  pathname === `${item.link}`
                    ? "bg-accent text-accent-foreground"
                    : ""
                }`}
              >
                {item.icon}
                {item.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <ModeToggle className="border-0 dark:bg-transparent mx-1 rounded-xl p-1 px-5 h-10" />
      
      {/* Bottom Border Shine Effect */}
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(80%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-purple-500 dark:via-emerald-400/50 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </NavigationMenu>
  );
}