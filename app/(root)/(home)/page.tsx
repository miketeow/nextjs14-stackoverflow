import ThemeToggler from "@/components/theme-toggler";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <div>
        <ThemeToggler />
      </div>
      <div>Home Page</div>
    </div>
  );
};

export default Homepage;
