export function ShowSection() {
  const items = [
    { image: "1.jpg", category: "TV Show " },
    { image: "2.jpg", category: "Movies " },
    { image: "3.jpg", category: "Premiums " },
    { image: "4.jpg", category: "Hulu Originals" },
  ];
  return (
    <div className="text-white">
      <div className="mx-auto container mt-8">
        <div className="flex flex-col items-center">
          <h4 className="uppercase font-bold text-sm text-tcr">
            INCLUDED IN ALL PLANS
          </h4>
          <h1 className="my-4 md:font-bold md:text-5xl">All The TV You Love</h1>
          <p className="font-normal px-5 md:px-1 text-base pt-4 mx-auto break-words text-center max-w-lg">
            Stream full seasons of exclusive series, current-season episodes,
            hit movies, Hulu Originals, kids shows, and more.
          </p>
        </div>
        {/*  grid container*/}
        <div className="mx-auto mt-8 px-5">
          <div className="grid grid-cols-2  xl:grid-cols-4 gap-4 md:max-w-3xl md:gap-8 lg:max-w-6xl lg:gap-12 xl:gap-4">
            {items.map((item, index) => {
              return (
                <div key={index} className="cursor-pointer relative">
                  <div className="inset-0 gradient absolute" />
                  <img
                    src={`/images/${item.image}`}
                    alt="images"
                    className="object-contain h-full"
                  />
                  <div className="p-4 absolute top-0 left-0">
                    <h3 className="font-normal text-xl">{item.category}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
