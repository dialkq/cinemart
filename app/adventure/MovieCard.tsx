import axios from "axios";
import { useInfiniteQuery, useQuery } from "react-query";
import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import loading from "@/public/animation/loading.json";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import AddToCart from "@/components/common/Button/AddToCart";

interface Movie {
  poster_path: string;
  title: string;
  adult: boolean;
  id: number;
}

interface ApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const MovieCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const fetchMovies = async ({ pageParam = 1 }) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODg3MjZiOWQzNzdjMjI1ZmNmNzhhZjEwMTI0YTA4OCIsInN1YiI6IjY1ZGFjMDY0YWUyODExMDE3YzRjMzkwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NPd90WmkTBur276VZ6-xXX1BWtxMmx77d9DIIBw1cm0",
      },
    };

    const response = await axios.get<ApiResponse>(
      `https://api.themoviedb.org/3/discover/movie?include_adult=true&language=en-US&page=${pageParam}&sort_by=popularity.desc&with_genres=12`,
      options
    );
    return { data: response.data, nextPage: pageParam + 1 };
  };

  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery("movies", fetchMovies, {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  // HANDLE LOADING
  if (isLoading)
    return (
      <Lottie
        className="h-40 w-40 md:w-60 md:h-60 lg:w-72 lg:h-72 mx-auto"
        animationData={loading}
      />
    );

  return (
    <InfiniteScroll
      dataLength={data?.pages.length || 0}
      next={fetchNextPage}
      hasMore={hasNextPage || false}
      loader={
        <Lottie
          className="h-40 w-40 md:w-60 md:h-60 lg:w-72 lg:h-72 mx-auto"
          animationData={loading}
        />
      }
    >
      <div className="flex flex-col w-11/12 mx-auto">
        <div className="mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {data?.pages.map((page, i) =>
            page.data.results.map((movie: Movie) => (
              <div key={movie.id}>
                <div className="flex cursor-pointer p-0">
                  <Image
                    className="rounded-md my-auto mx-auto hover:scale-110 transition duration-300 ease-in-out"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={400}
                    height={400}
                    priority={true}
                  />
                </div>

                {/* TITLE */}
                <div className="flex flex-col w-fit mx-auto my-1 md:my-2 lg:my-3">
                  <p
                    className="text-center font-lato font-bold text-sm md:text-base lg:text-xl 
                  overflow-ellipsis overflow-hidden whitespace-nowrapwrap max-w-xs"
                  >
                    {movie.title.length > 12
                      ? `${movie.title.substring(0, 12)}..`
                      : movie.title}
                  </p>
                </div>

                {/* PRICE */}
                <p className="text-center font-lugrasimo italic font-semibold text-xs md:text-sm lg:text-base">
                  {movie.adult ? "Rp55.000" : "Rp35.000"}
                </p>

                {/* ADD TO CART */}
                <AddToCart movie={movie} />
              </div>
            ))
          )}
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default MovieCard;
