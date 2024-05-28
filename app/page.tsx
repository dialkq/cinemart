"use client";
import GenreTabs from "@/components/common/GenreTabs";
import { Navbar } from "@/components/common/Navbar";
import CarouselCard from "@/components/common/Carousel";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const genres = ["Action", "Adventure", "Crime", "Romance"].sort();
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (!userData) {
      router.push("/auth/signin");
    }
  }, [router]);

  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="w-full flex flex-col min-h-screen mx-auto">
        <div className="w-full mx-auto">
          <Navbar />
        </div>
        {/* MAPING GENRE TABS */}
        <div
          className="w-full mx-auto py-5 px-5 md:py-5 md:px-10 lg:py-5 lg:px-16 bg-sky-50 dark:bg-slate-900
           sticky top-0 z-10
          grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4
        gap-x-5 gap-y-3 md:gap-x-8 md:gap-y-3 lg:gap-x-24 lg:gap-y-4"
        >
          {genres.map((genre) => (
            <GenreTabs key={genre} genre={genre} />
          ))}
        </div>
        <div className="w-11/12 md:w-9/12 lg:w-10/12 my-3 md:my-5 lg:my-10 mx-auto">
          <p className="text-center font-cinzel text-3xl md:text-4xl lg:text-5xl">
            Now Playing~
          </p>
          <CarouselCard />
        </div>
      </div>
    </QueryClientProvider>
  );
}
