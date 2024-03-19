import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4 bg-accent">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Input
          className="shadow-none outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 border-none bg-secondary"
          type="text"
          placeholder="Search globally"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
