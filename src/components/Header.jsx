import React from "react";

export const Header = () => {
  const [showHeadr, setShowHeader] = React.useState(false);

  React.useEffect(() => {
    const fide = () => {
      if (window.scrollY > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
    window.addEventListener("scroll", fide);

    return () => window.removeEventListener("scroll", fide);
  }, []);

  return (
    <div
      className={`bg-gradient-to-b from-black to-transparent h-16 fixed z-20 top-0 w-full transition duration-150 ease-in-out ${
        showHeadr ? "invisible" : "visible"
      } `}
    >
      <div className="flex justify-between ml-2 p-4">
        <img src="/images/logo.png" className="h-7 cursor-pointer" alt="logo" />
        <button className="text-white px-3 py-2 rounded-md transition duration-200 ease-in-out font-semibold  hover:bg-gray-900">
          Log in
        </button>
      </div>
    </div>
  );
};
