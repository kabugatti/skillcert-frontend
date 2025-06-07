import { WelcomePageBlockProps } from "@/lib/interface";
import React from "react";

const Block = ({ data }: { data: WelcomePageBlockProps }) => {
  return (
    <div className=" flex gap-4 items-center bg-gray-800 rounded-[20px] p-5">
      <div className="w-8 h-9">{data.icon}</div>
      <div className="flex flex-col items-start gap-3">
        <p className="text-purple-600 text-2xl">{data.figure}+</p>
        <small className="pl-0.5 whitespace-nowrap">{data.text}</small>
      </div>
    </div>
  );
};

export default Block;
