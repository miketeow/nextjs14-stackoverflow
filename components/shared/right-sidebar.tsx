import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./render-tag";
const hotQuestions = [
  { _id: 1, title: "Test1 testing testing testing testing testing testing" },
  { _id: 2, title: "Test2" },
  {
    _id: 3,
    title:
      "Test3 testing testing testing testing testing testing testingtesting testing",
  },
  { _id: 4, title: "Test4 testing testing testing testing testing testing" },
  { _id: 5, title: "Test5" },
];

const popularTags = [
  { _id: "1", name: "javascript", totalQuestions: 5 },
  { _id: "2", name: "react", totalQuestions: 3 },
  { _id: "3", name: "nextjs", totalQuestions: 2 },
  { _id: "4", name: "tailwind", totalQuestions: 4 },
  { _id: "5", name: "typescript", totalQuestions: 3 },
];
const RightSidebar = () => {
  return (
    <section className="sticky right-0 top-0 flex h-screen w-[350px] flex-col bg-accent justify-between overflow-y-hidden border-l p-6 pt-36 dark:shadow-none max-xl:hidden lg:w-[266px]">
      <div>
        <h3 className="text-xl font-bold leading-6">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p>{question.title}</p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron_right"
                width={20}
                height={20}
                className="invert dark:invert-0"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-xl font-bold leading-6">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              name={tag.name}
              _id={tag._id}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
