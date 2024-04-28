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

interface Movie {
  poster_path: string;
  title: string;
}
export default function CarouselCard() {
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
  if (isLoading) return "Loading Movie...";

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full mx-auto"
    >
      <CarouselContent className="">
        {data.results.slice(0, 10).map((movie: Movie, index: number) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-5 my-3bg-red-100">
              <Card>
                <CardContent className="cursor-pointer flex p-0">
                  <Image
                    className="rounded-md"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={500}
                    height={500}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
