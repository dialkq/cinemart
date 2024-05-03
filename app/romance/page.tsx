"use client";
import GenreTabs from "@/components/common/GenreTabs";
import { Navbar } from "@/components/common/Navbar";
import MovieCard from "./MovieCard";
import { QueryClientProvider, QueryClient } from "react-query";
import { IoIosArrowDropupCircle } from "react-icons/io";

export default function romance() {
  const genres = ["Action", "Adventure", "Crime", "Romance"].sort();
  // SCROLL TO TOP
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="w-full flex flex-col min-h-screen mx-auto">
        <div className="w-full mx-auto">
          <Navbar />
        </div>
        <div 
        onClick={scrollToTop}
        className="hidden md:flex md:fixed cursor-pointer md:bottom-8 md:right-2 lg:bottom-10 lg:right-5">
          <IoIosArrowDropupCircle className="w-10 h-10 lg:w-12 lg:h-12" />
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