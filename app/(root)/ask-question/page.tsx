import Question from "@/components/forms/question";
import React from "react";

const AskQuestionPage = () => {
  return (
    <div>
      <h1 className="font-bold text-xl">Ask a Question</h1>
      <div className="mt-9">
        <Question />
      </div>
    </div>
  );
};

export default AskQuestionPage;
