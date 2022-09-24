export const Hero = () => {
  return (
    <div
      className="relative object-fill h-screen"
      style={{
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundImage: 'url("/images/hero.jpg")',
      }}
    >
      <div className="h-28" />
      <div className="flex justify-center mx-auto p-2">
        <div className="mt-10 flex flex-col items-center">
          <h1 className="uppercase text-tcr font-bold">
            try up to one month free
          </h1>
          <div className="mt-7">
            <img src="/images/logo.png" className="h-20" alt="logo" />
          </div>
          <div className="mt-7 text-white">
            <h4 className="font-bold md:text-2xl break-words text-md">
              Bundle with any Hulu plan & save
            </h4>
            <h3 className="font-normal text-center mt-5 text-md">
              Get Hulu, Disney+, and ESPN+.
            </h3>
          </div>
          <button className="bg-white px-3 py-2 rounded animate-bounce mt-6 font-semibold hover:opacity-80 text-sm  uppercase">
            start your free trial
          </button>
        </div>
      </div>
    </div>
  );
};
