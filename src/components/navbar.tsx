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
import { Home, Briefcase, Folder, Contact } from "lucide-react"; // Import icons

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-5 w-5 stroke-accent-foreground dark:stroke-slate-100" />, // Add icon
  },
  {
    name: "Experience",
    link: "/experience",
    icon: <Briefcase className="h-5 w-5 stroke-accent-foreground dark:stroke-slate-100" />, // Add icon
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <Folder className="h-5 w-5 stroke-accent-foreground dark:stroke-slate-100" />, // Add icon
  },
  {
    name: "Contact Me",
    link: "/contact",
    icon: <Contact className="h-5 w-5 stroke-accent-foreground dark:stroke-slate-100" />, // Add icon
  },
];

export function NavigationMenuDemo() {
  const pathname = usePathname();

  return (
    <NavigationMenu className="sticky-nav flex justify-center items-center max-w-10xl w-full pt-5 pb-1 mb-0 mt-4 mx-auto backdrop-blur-md">
     <NavigationMenuList className="border-2 rounded-2xl p-1 bg-slate-100 shadow-md dark:bg-[var(--navbar-bg)] backdrop-blur-[12px] ">

        {navItems.map((item, i) => (
          <NavigationMenuItem key={i}>
            <Link href={item.link} legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} flex items-center flex-row ${pathname === `${item.link}`
                  ? "text-accent-foreground bg-slate-200 dark:bg-accent"
                  : ""
                  }`}
              >
                {item.icon}
                <span className="hidden md:inline ml-2">{item.name}</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}

        {/* Bottom Border Shine Effect */}
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(80%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-purple-500 to-purple-500/0 dark:via-emerald-500/90  dark:to-emerald-500/0 transition-opacity duration-500 group-hover:opacity-40" />
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(80%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-purple-500 to-purple-500/0 dark:via-emerald-500/90  dark:to-emerald-500/0 transition-opacity duration-500 group-hover:opacity-40" />


      </NavigationMenuList>
      <ModeToggle className="border-0 dark:bg-transparent mx-1 rounded-xl p-1 px-5 h-10" />


    </NavigationMenu>
  );
}