import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import loading from "@/public/animation/loading.json";
import AddToCart from "@/components/common/Button/AddToCart";
import AddToFavourite from "@/components/common/Button/AddToFavourite";

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
  const [movies, setMovies] = useState<Movie[]>([]); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [loading, setLoading] = useState(false); 
  const [hasMore, setHasMore] = useState(true);

  // Fetch movies from the API
  const fetchMovies = async (page: number) => {
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODg3MjZiOWQzNzdjMjI1ZmNmNzhhZjEwMTI0YTA4OCIsInN1YiI6IjY1ZGFjMDY0YWUyODExMDE3YzRjMzkwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NPd90WmkTBur276VZ6-xXX1BWtxMmx77d9DIIBw1cm0",
      },
    };

    try {
      const response = await axios.get<ApiResponse>(
        `/api/3/discover/movie?include_adult=true&language=en-US&page=${page}&sort_by=popularity.desc`,
        options
      );
      const newMovies = response.data.results;

      setMovies((prevMovies) => [...prevMovies, ...newMovies]);

      if (newMovies.length < 6) {
        setHasMore(false); // No more data to load
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(1); 
    setCurrentPage(2); 
  }, []);

  // Load more movies when button is clicked
  const loadMoreMovies = () => {
    if (!loading && hasMore) {
      fetchMovies(currentPage);
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="flex flex-col w-11/12 mx-auto">
      {/* Movies grid */}
      <div className="mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {movies.map((movie) => (
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

            <div className="w-fit mx-auto flex my-4">
              {/* ADD TO CART */}
              <AddToCart movie={movie} />

              {/* ADD TO FAVORITE */}
              <AddToFavourite movie={movie} />
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <button
          onClick={loadMoreMovies}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto my-4"
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default MovieCard;