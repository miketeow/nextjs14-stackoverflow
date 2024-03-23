import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
type RenderTagsProps = {
  _id: number;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
};
const RenderTag = ({
  _id,
  name,
  totalQuestions,
  showCount,
}: RenderTagsProps) => {
  return (
    <div>
      <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
        <Badge className="rounded-md border-none px-4 py-2 uppercase bg-slate-400">
          {name}
        </Badge>
        {showCount && <p>{totalQuestions}</p>}
      </Link>
    </div>
  );
};

export default RenderTag;
