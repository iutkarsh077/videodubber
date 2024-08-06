"use client";

import { useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";

const UpvoteButton = () => {
  const [upvotes, setUpvotes] = useState(0);
  const [isUpvoted, setIsUpvoted] = useState(false);

  const handleUpvote = () => {
    if (isUpvoted) {
      setUpvotes(upvotes - 1);
    } else {
      setUpvotes(upvotes + 1);
    }
    setIsUpvoted(!isUpvoted);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleUpvote}
        className={`relative flex items-center pl-4 pr-10 pt-4 pb-4 border rounded-md transition-colors outline-none duration-300 ${
          isUpvoted ? "bg-white border-orange-500 text-black" : "bg-orange-500 border-orange-500 text-white"
        }`}
      >
        <span
          className={`mr-2 transition-transform duration-300 ${
            isUpvoted ? "text-orange-500 animate-upvote" : "text-white"
          }`}
        >
          <TiArrowSortedUp size={24} />
        </span>

        <span className="flex gap-x-3 font-medium pl-1">UPVOTE <span>{upvotes}</span></span>
        {isUpvoted && (
          <div className="absolute inset-0 border-2 border-transparent rounded-md animate-sparkle"></div>
        )}
      </button>
      <style jsx>{`
        @keyframes upvote {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          50% {
            transform: translate(10px, -50px);
            opacity: 0.5;
          }
          100% {
            transform: translate(0, -100px);
            opacity: 0;
          }
        }
        .animate-upvote {
          animation: upvote 0.6s ease-in-out forwards;
        }
        @keyframes sparkle {
          0% {
            border-color: transparent;
            box-shadow: 0 0 0px rgba(255, 165, 0, 0.7);
          }
          50% {
            border-color: rgba(255, 165, 0, 0.5);
            box-shadow: 0 0 10px rgba(255, 165, 0, 0.7);
          }
          100% {
            border-color: transparent;
            box-shadow: 0 0 0px rgba(255, 165, 0, 0.7);
          }
        }
        .animate-sparkle {
          animation: sparkle 1s ease-in-out 0.2s;
        }
      `}</style>
    </div>
  );
};

export default UpvoteButton;
