"use client";
import GenreTabs from "@/components/common/GenreTabs";
import { Navbar } from "@/components/common/Navbar";
import CarouselCard from "@/components/common/Carousel";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();
export default function Home() {
  const genres = ["Action", "Adventure", "Crime", "Romance"].sort();

  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="w-full flex flex-col min-h-screen mx-auto">
        <div className="w-full mx-auto">
          <Navbar />
        </div>
        {/* MAPING GENRE TABS */}
        <div
          className="w-11/12 mx-auto my-3 md:my-4 lg:my-5
      grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4
      gap-x-5 gap-y-3 md:gap-x-8 md:gap-y-3 lg:gap-x-24 lg:gap-y-4"
        >
          {genres.map((genre) => (
            <GenreTabs key={genre} genre={genre} />
          ))}
        </div>
        <div className="w-11/12 my-3 md:my-5 lg:my-10 md:w-9/12 lg:w-10/12 mx-auto">
          <p className="text-center font-bold font-patua text-3xl md:text-4xl lg:text-5xl my-3">
            Now Playing
          </p>
          <CarouselCard />
        </div>
      </div>
    </QueryClientProvider>
  );
}