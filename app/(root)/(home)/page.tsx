import HomeFilter from "@/components/home/home-filter";
import Filter from "@/components/shared/filter";
import LocalSearch from "@/components/shared/search/local-search";
import ThemeToggler from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-[30px] font-bold tracking-tighter leading-10">
          All Questions
        </h1>
        <Link href="/ask-questions" className="flex justify-end max-sm:w-full">
          <Button className="min-h-10 px-4 py-3">Ask a Question</Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilter />
    </>
  );
};

export default Homepage;
