import React from "react";
import { useQuery, gql } from "@apollo/client";
import Movie from "./Movie";

const GET_PRODUCTS = gql`
  query {
    nowPlayingMovies {
      ok
      movies {
        id
        poster_path
        backdrop_path
        original_title
        release_date
      }
    }
  }
`;

export const Movies = () => {
  const { loading, data } = useQuery(GET_PRODUCTS);

  if (loading) return <h1>loading...</h1>;

  return (
    <div className="mt-5 mx-3 md:mx-auto md:max-w-7xl">
      <div className="px-6 text-center my-6">
        <h1 className="text-white font-semibold text-3xl">Popular Movies</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.nowPlayingMovies.movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
