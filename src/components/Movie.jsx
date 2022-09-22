export default function Movie({ movie }) {
  return (
    <div className="cursor-pointer hover:scale-110 transition ea ">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.original_title}
      />
    </div>
  );
}
