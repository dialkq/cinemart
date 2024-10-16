import { useState, useEffect } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

interface AddToFavouriteProps {
  movie: {
    poster_path: string;
    title: string;
    adult: boolean;
  };
}

const AddToFavourite = ({ movie }: AddToFavouriteProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies") || "[]");
    const isMovieFavorited = favoriteMovies.some(
      (favorite: any) => favorite.title === movie.title
    );
    setIsFavorited(isMovieFavorited);
  }, [movie.title]);

  const handleFavoriteClick = () => {
    const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies") || "[]");
    let updatedFavorites;

    if (isFavorited) {
      updatedFavorites = favoriteMovies.filter(
        (favorite: any) => favorite.title !== movie.title
      );
    } else {
      updatedFavorites = [...favoriteMovies, movie];
    }

    localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
    setIsFavorited(!isFavorited); 
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
