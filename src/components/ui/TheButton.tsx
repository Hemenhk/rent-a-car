import React from "react";

export default function TheButton() {
  return (
    <button className="before:ease relative text-black h-10 px-4 py-2 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
       <span className="relative z-10">Slide hover</span>
    </button>
  );
}
