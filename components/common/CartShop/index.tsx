import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { useCartContext } from "@/context/Cart";
import { BiCart } from "react-icons/bi";
import { Button } from "@/components/ui/button";

const CartShop = () => {
  const { cart } = useCartContext();
  return (
    <div className="flex">
      <Drawer>
        <DrawerTrigger className="mr-2 md:mr-0 ">
          <div className="flex relative justify-center items-center cursor-pointer">
            <BiCart className="font-extrabold my-auto h-5 w-5 md:w-6 md:h-6" />
            <p
              className="font-bold font-sans bg-red-500 p-0.5 rounded-full text-white
      absolute -top-2 right-0 text-xs"
            >
              {cart.length}
            </p>
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            {/* MAPING POSTER AND TITLE */}
            {cart.map((movie, index) => (
              <div
                className="flex justify-between w-full md:w-11/12 mx-auto my-2"
                key={index}
              >
                <div className="flex">
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
                <div className="my-auto">
                  <p className="text-center font-lugrasimo italic font-semibold">
                    {movie.adult ? "Rp55.000" : "Rp35.000"}
                  </p>
                </div>
              </div>
            ))}
          </DrawerHeader>
          <DrawerFooter>
            <p className="font-mono text-base md:text-lg font-semibold text-center my-2">
              Rp{cart.reduce((total, movie) => total + movie.price, 0)}
            </p>
            <Button className="bg-green-400 w-full md:w-11/12 mx-auto">
              Checkoutt
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <div></div>
    </div>
  );
};

export default CartShop;
