"use client";
import { HomePageFilters } from "@/constants/filters";
import React from "react";
import { Button } from "../ui/button";

const HomeFilter = () => {
  const active = "";
  return (
    <div className="mt-10 flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          onClick={() => {}}
          className={`rounded-lg px-6 capitalize shadow-none py-3 ${
            active === item.value
              ? "bg-primary"
              : "bg-secondary text-secondary-foreground"
          }`}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
