import { useCartContext } from "@/context/Cart";

interface Movie {
  title: string;
  poster_path: string;
  adult: boolean;
}

interface AddToCartProps {
  movie: Movie;
}

const AddToCart: React.FC<AddToCartProps> = ({ movie }) => {
  const { cart, setCart } = useCartContext();

  const addToCart = () => {
    if (cart.some((item) => item.title === movie.title)) {
      alert("Maaf anda tidak bisa memesan lebih dari sekali dari film yang sama");
    } else {
      const newCart = [
        ...cart,
        {
          title: movie.title,
          poster_path: movie.poster_path,
          price: movie.adult ? 55000 : 35000,
          adult: movie.adult
        },
      ];
      setCart(newCart);
    }
  };

  return (
    <div
      onClick={addToCart}
      className="mx-auto w-full px-4 py-2 md:px-4 md:py-2 lg:py-3 lg:px-2 flex justify-center items-center
                rounded-xl bg-green-400 cursor-pointer hover:bg-green-500 active:bg-green-600 active:ring active:ring-green-800"
    >
      <p className="font-lato font-extrabold text-white text-xs md:text-sm tracking-wider">
        Add to cart
      </p>
    </div>
  );
};

export default AddToCart;