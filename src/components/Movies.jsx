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
      }
    }
  }
`;

export const Movies = () => {
  const { loading, data } = useQuery(GET_PRODUCTS);

  if (loading) return <h1>loading...</h1>;

  return (
    <div className="mt-5">
      <div className="mx-auto md:max-w-xl max-w-xs gap-3 grid md:grid-cols-2 lg:grid-cols-3">
        {data?.nowPlayingMovies.movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
