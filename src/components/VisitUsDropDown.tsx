"use client";

import Link from "next/link";
import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const VisitUsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onClick={toggleDropdown}
    >
      <button
        className="px-4 py-4 bg-white text-black rounded-md border border-gray-500 hover:border-orange-600 flex items-center gap-x-2"
      >
        Visit <TiArrowSortedDown />
      </button>

      {isOpen && (
        <div className="absolute  mt-2 w-68 bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="py-1">
            <Link
              href="#"
              className="flex gap-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Website <span className="font-light pl-4">videodubber.ai</span> 
            </Link>
            <Link
              href="#"
              className="flex gap-x-4 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Learn more <span className="font-light pl-4">videodubber.ai</span> 
            </Link>
            <Link
              href="#"
              className="flex gap-x-4 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Learn more <span className="font-light pl-4">videodubber.ai</span> 
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisitUsDropdown;
