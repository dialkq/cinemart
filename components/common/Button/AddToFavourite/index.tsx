import { useState, useEffect } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import axios from "axios";

interface AddToFavouriteProps {
  movie: {
    id: number; // Tambahkan id di sini
    poster_path: string;
    title: string;
    adult: boolean;
  };
}

const AddToFavourite = ({ movie }: AddToFavouriteProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const API_URL = "https://api.themoviedb.org/3/account/21029898/favorite";
  const BEARER_TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN;

  useEffect(() => {
    const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies") || "[]");
    const isMovieFavorited = favoriteMovies.some(
      (favorite: any) => favorite.id === movie.id
    );
    setIsFavorited(isMovieFavorited);
  }, [movie.id]);

  const handleFavoriteClick = async () => {
    try {
      const payload = {
        media_type: "movie",
        media_id: movie.id,
        favorite: !isFavorited, // Toggle favorite state
      };

      const response = await axios.post(
        API_URL,
        payload,
        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        setIsFavorited(!isFavorited);

        const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies") || "[]");

        let updatedFavorites;
        if (!isFavorited) {
          updatedFavorites = [...favoriteMovies, movie];
        } else {
          updatedFavorites = favoriteMovies.filter(
            (favorite: any) => favorite.id !== movie.id
          );
        }

        localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
      }
    } catch (error) {
      console.error("Failed to update favorite status", error);
    }
  };

  return (
    <div
      className="flex justify-center items-center ml-4 cursor-pointer"
      onClick={handleFavoriteClick}
    >
      {isFavorited ? (
        <MdFavorite className="w-7 h-7 md:h-8 md:w-8 text-red-700" />
      ) : (
        <MdFavoriteBorder className="w-7 h-7 md:h-8 md:w-8 text-red-700" />
      )}
    </div>
  );
};

export default AddToFavourite;