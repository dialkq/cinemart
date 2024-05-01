import axios from "axios";
import { useQuery } from "react-query";
import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import loading from "@/public/animation/loading.json";

interface Movie {
  poster_path: string;
  title: string;
  adult: boolean;
  id: number;
}

const MovieCard = () => {
  const fetchMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODg3MjZiOWQzNzdjMjI1ZmNmNzhhZjEwMTI0YTA4OCIsInN1YiI6IjY1ZGFjMDY0YWUyODExMDE3YzRjMzkwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NPd90WmkTBur276VZ6-xXX1BWtxMmx77d9DIIBw1cm0",
      },
    };

    const response = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?include_adult=true&language=en-US&page=1&sort_by=popularity.desc&without_genres=28",
      options
    );
    return response.data;
  };

  const { data, isLoading, error } = useQuery("movies", fetchMovies);
  // HANDLE LOADING
  if (isLoading)
    return (
      <Lottie
        className="h-40 w-40 md:w-60 md:h-60 lg:w-72 lg:h-72 mx-auto"
        animationData={loading}
      />
    );

  return (
    <div className="mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
       {data.results.map((movie: Movie, key={}) => (
            <div key={movie.id}>
              <div className="flex cursor-pointer p-0">
                <Image
                  className="rounded-md my-auto mx-auto"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={400}
                  height={400}
                  priority={false}
                />
              </div>

              {/* TITLE */}
              <div className="flex flex-col w-fit mx-auto my-1 md:my-2 lg:my-3">
                <p
                  className="text-center font-lato font-bold text-sm md:text-base lg:text-xl 
                overflow-ellipsis overflow-hidden whitespace-nowrapwrap max-w-xs"
                >
                  {movie.title.length > 15
                    ? `${movie.title.substring(0, 15)}..`
                    : movie.title}
                </p>
              </div>

              {/* PRICE */}
              <p className="text-center font-lugrasimo italic font-semibold text-xs md:text-sm lg:text-base">
                {movie.adult ? "Rp55.000" : "Rp35.000"}
              </p>

              {/* ADD TO CART */}
              <div
                className="mx-auto w-fit py-2 px-3 md:py-3 md:px-5 lg:py-3 lg:px-5
                rounded-xl bg-green-400 mt-2 mb-1 md:mb-4 lg:mb-10 cursor-pointer hover:bg-green-500"
              >
                <p className="font-lato font-extrabold text-white text-xs md:text-sm tracking-wider">
                  Add to cart
                </p>
              </div>
            </div>
        ))}
    </div>
  );
};

export default MovieCard;