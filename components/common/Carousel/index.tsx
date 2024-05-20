"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import { useQuery } from "react-query";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Lottie from "lottie-react";
import loading from "@/public/animation/loading.json";
import AddToCart from "../Button/AddToCart";

interface Movie {
  poster_path: string;
  title: string;
  adult: boolean;
}
export default function CarouselCard() {
  // FETCH
  const fetchMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODg3MjZiOWQzNzdjMjI1ZmNmNzhhZjEwMTI0YTA4OCIsInN1YiI6IjY1ZGFjMDY0YWUyODExMDE3YzRjMzkwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NPd90WmkTBur276VZ6-xXX1BWtxMmx77d9DIIBw1cm0",
      },
    };

    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    return response.data;
  };

  const { data, isLoading, error } = useQuery("movies", fetchMovies);
  // AUTOPLAY FROM SHADNCN/UI
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  // HANDLE LOADING
  if (isLoading)
    return (
      <Lottie
        className="h-40 w-40 md:w-60 md:h-60 lg:w-72 lg:h-72 mx-auto"
        animationData={loading}
      />
    );

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full mx-auto my-4 md:my-5 lg:my-6"
    >
      <CarouselContent className="">
        {data.results.slice(0, 12).map((movie: Movie, index: number) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="flex flex-col bg-transparent border-none shadow-transparent py-1 px-8 md:py-2 md:px-8 lg:py-3 lg:px-12">
              <CardContent className="flex cursor-pointer p-0">
                <Image
                  className="rounded-md my-auto mx-auto"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={400}
                  height={400}
                  priority={true}
                />
              </CardContent>

              {/* TITLE */}
              <div className="flex flex-col w-fit mx-auto my-1 md:my-2 lg:my-3">
                <p
                  className="text-center font-lato font-bold text-sm md:text-base lg:text-xl 
                overflow-ellipsis overflow-hidden whitespace-nowrapwrap max-w-xs"
                >
                  {movie.title.length > 15
                    ? `${movie.title.substring(0, 15)}..`
                    : movie.title}
                </p>
              </div>

              {/* PRICE */}
              <p className="text-center font-lugrasimo italic font-semibold">
                {movie.adult ? "Rp55.000" : "Rp35.000"}
              </p>

              {/* ADD TO CART */}
             <AddToCart />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}