import ThemeToggler from "@/components/theme-toggler";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./mobile-nav";
import Logo from "./logo";
import GlobalSearch from "../search/global-search";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-accent fixed z-50 w-full gap-5 p-6 shadow-md dark:shadow-none sm:px-12">
      <Logo />
      <GlobalSearch />
      <div className="flex justify-between items-center gap-5">
        <ThemeToggler />
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
