import { useCartContext } from '@/context/Cart';

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
    const newCart = [...cart, { title: movie.title, poster_path: movie.poster_path, price: movie.adult ? 55000 : 35000, adult: movie.adult }];
    setCart(newCart);

    console.log("DATANYA", newCart);
  };

  return (
    <div
      onClick={addToCart}
      className="mx-auto w-fit py-2 px-3 md:py-3 md:px-4 lg:py-3 lg:px-5
                rounded-xl bg-green-400 mt-2 mb-1 md:mb-4 lg:mb-10 cursor-pointer hover:bg-green-500 active:bg-green-600 active:ring active:ring-green-800"
    >
      <p className="font-lato font-extrabold text-white text-xs md:text-sm tracking-wider">
        Add to cart
      </p>
    </div>
  );
};

export default AddToCart;