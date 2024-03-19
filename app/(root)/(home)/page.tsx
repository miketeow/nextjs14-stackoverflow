import { UserButton } from "@clerk/nextjs";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <div>Home Page</div>
    </div>
  );
};

export default Homepage;
