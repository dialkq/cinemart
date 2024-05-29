import Image from "next/image";
import { useCartContext } from "@/context/Cart";
import { BiCart } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

const CartShop = () => {
  const { cart, setCart } = useCartContext();

  const handleRemove = (title: string) => {
    setCart(cart.filter((movie) => movie.title !== title));
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex relative justify-center items-center cursor-pointer">
          <BiCart className="font-extrabold my-auto h-5 w-5 md:w-6 md:h-6" />
          <p
            className="font-bold font-sans bg-red-500 p-0.5 rounded-full text-white
      absolute -top-2 right-0 text-xs"
          >
            {cart.length}
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="overflow-auto max-h-full w-11/12 sm:max-w-md md:max-w-7xl mx-auto">
        <DialogHeader>
          <DialogTitle className="mb-5">Cart List</DialogTitle>
          {/* MAPING POSTER AND TITLE */}
          {cart.map((movie, index) => (
            <div
              className="flex justify-between w-full md:w-11/12 mx-auto"
              key={index}
            >
              <div className="flex my-2 md:my-3">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={50}
                  height={50}
                />
                <p className="font-mono my-auto text-center pl-5 hidden md:flex">
                  {movie.title}
                </p>
              </div>
              <div className="flex my-auto">
                <p className="text-center font-lugrasimo italic font-semibold my-auto">
                  {movie.adult ? "Rp55.000" : "Rp35.000"}
                </p>
                <MdDelete
                  className="text-red-500 hover:text-red-600 focus:text-red-700 cursor-pointer text-lg ml-5 my-auto"
                  onClick={() => handleRemove(movie.title)}
                />
              </div>
            </div>
          ))}
        </DialogHeader>
        <DialogFooter className="w-full mx-auto my-auto">
          <div className="flex flex-col w-full my-3">
            <p className="font-mono font-semibold text-center my-auto w-full">
              Total: Rp
              {cart
                .reduce((total, movie) => total + movie.price, 0)
                .toLocaleString("id-ID")}
            </p>
            <Button className="bg-green-400 w-full mx-auto my-2 md:my-3">Checkout</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CartShop;
