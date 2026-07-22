import React from "react";

export default function NotchedPanel() {
  return (
    /* -mt-16 to -mt-32 creates the negative overlap on top of the hero section */
    <div
      className="relative z-20 w-full bg-[#07080D] -mt-16 sm:-mt-24 md:-mt-32 drop-shadow-2xl"
      style={{
        clipPath: "polygon(0% 0%, 50% 32%, 100% 0%, 100% 100%, 0% 100%)",
      }}
    >
      <div className="flex h-20 items-center justify-center px-10 pb-10 pt-[18%]">

      </div>
    </div>
  );
}