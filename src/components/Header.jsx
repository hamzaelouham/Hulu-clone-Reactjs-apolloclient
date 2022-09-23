import React from "react";

export const Header = () => {
  return (
    <div className="bg-transparent">
      <div className="flex justify-between ml-2 p-4">
        <img src="/images/logo.png" className="h-7 cursor-pointer" alt="logo" />
        <button className="text-white font-semibold px-2 hover:opacity-90">
          Log in{" "}
        </button>
      </div>
    </div>
  );
};
