import React from "react";
import VisitUsDropdown from "./VisitUsDropDown";
import UpvoteButton from "./UpVoteBtn";

const Content = () => {
  return (
    <div className="w-full px-4 md:px-0">
      <div className="md:ml-56 mt-6">
        <div className="w-full md:w-3/5 space-y-3">
          <div className="text-2xl  font-bold text-wrap">
            VideoDubber - Fast Video Translator
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-3 md:gap-y-0 md:gap-x-7">
            <div className="font-extralight text-lg sm:text-xl md:text-2xl text-wrap">
              Translate videos in your own voice, globalize in a click!
            </div>
            <div className="flex gap-x-4">
              <VisitUsDropdown />
              <UpvoteButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
