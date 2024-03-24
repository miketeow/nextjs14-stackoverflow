"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
type LocalSearchProps = {
  route: string;
  iconPosition: "left" | "right";
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
};
const LocalSearch = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: LocalSearchProps) => {
  return (
    <div
      className={`flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 border-red-50${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="border-none shadow-none outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 text-base font-normal leading-5 bg-slate-300"
      />

      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearch;
