"use client";
import GenreTabs from "@/components/common/GenreTabs";
import { Navbar } from "@/components/common/Navbar";
import MovieCard from "./MovieCard";
import { QueryClientProvider, QueryClient } from "react-query";

export default function adventure() {
  const genres = ["Action", "Adventure", "Crime", "Romance"].sort();

  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="w-full min-h-screen mx-auto">
        <div className="w-full mx-auto">
          <Navbar />
        </div>
        {/* MAPING GENRE TABS */}
        <div
          className="w-full mx-auto py-5 px-5 md:py-5 md:px-10 lg:py-5 lg:px-16 bg-sky-50 dark:bg-slate-900
          sticky top-0 z-50
         grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4
       gap-x-5 gap-y-3 md:gap-x-8 md:gap-y-3 lg:gap-x-24 lg:gap-y-4"
        >
          {genres.map((genre) => (
            <GenreTabs key={genre} genre={genre} />
          ))}
        </div>
        <div className="w-11/12 mx-auto my-10">
          <MovieCard />
        </div>
      </div>
    </QueryClientProvider>
  );
}