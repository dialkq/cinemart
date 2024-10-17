import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  adult: boolean;
}

const Favorit = () => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = "https://api.themoviedb.org/3/account/21029898/favorite/movies?language=en-US&page=1&sort_by=created_at.asc";
  const BEARER_TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN;
  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          setFavoriteMovies(response.data.results); // Assign movie results to state
        } else {
          setError("Failed to fetch favorite movies");
        }
      } catch (err) {
        setError("An error occurred while fetching favorite movies");
      } finally {
        setLoading(false);
      }
    };

    fetchFavoriteMovies();
  }, [BEARER_TOKEN]);

  return (
    <div className="w-full -mt-5">
      <h1 className="text-2xl font-bold mb-6 text-center">Daftar Film Favorit</h1>

      {loading ? (
        <p className="mx-auto text-center my-10">Loading...</p>
      ) : error ? (
        <p className="mx-auto text-center my-10">{error}</p>
      ) : favoriteMovies.length === 0 ? (
        <p className="mx-auto text-center my-10">Tidak ada film favorit.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favoriteMovies.map((movie: Movie) => (
            <div key={movie.id} className="flex flex-col items-center">
              <Image
                className="rounded-md"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={200}
                height={300}
              />
              <p className="mt-2 text-center font-bold">{movie.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorit;