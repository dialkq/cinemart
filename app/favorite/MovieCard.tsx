import { useState, useEffect } from "react";
import Image from "next/image";

interface Movie {
  poster_path: string;
  title: string;
  adult: boolean;
}

const Favorit = () => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteMovies") || "[]");
    setFavoriteMovies(storedFavorites);
  }, []);

  return (
    <div className="w-full -mt-5">
      <h1 className="text-2xl font-bold mb-6 text-center">Daftar Film Favorit</h1>

      {favoriteMovies.length === 0 ? (
        <p className="mx-auto text-center my-10">Tidak ada film favorit.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favoriteMovies.map((movie: Movie, index: number) => (
            <div key={index} className="flex flex-col items-center">
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