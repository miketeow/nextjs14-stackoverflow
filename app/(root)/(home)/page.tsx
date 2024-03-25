import QuestionCard from "@/components/cards/question-card";
import HomeFilter from "@/components/home/home-filter";
import Filter from "@/components/shared/filter";
import NoResult from "@/components/shared/no-result";
import LocalSearch from "@/components/shared/search/local-search";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const questions = [
  {
    _id: 1,
    title: "What is the best way to learn sql with React?",
    tags: [
      { _id: "1", name: "react" },
      { _id: "2", name: "sql" },
    ],
    author: { _id: "1", name: "John Doe", picture: "johndoe.jpg" },
    upvotes: 104445,
    views: 20020200,
    answers: [],
    createdAt: new Date("2024-03-22T12:00:00Z"),
  },
  {
    _id: 2,
    title: "How to implement MDX in Astro",
    tags: [
      { _id: "3", name: "Astro" },
      { _id: "4", name: "MDX" },
    ],
    author: { _id: "2", name: "Ethan Hunt", picture: "ethanhunt.jpg" },
    upvotes: 13444,
    views: 10322222,
    answers: [],
    createdAt: new Date("2022-03-01T12:00:00Z"),
  },
];
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
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There is no question to show"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nobis."
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Homepage;
