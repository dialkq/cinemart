import GenreTabs from "@/components/common/GenreTabs";
import { Navbar } from "@/components/common/Navbar";

export default function Home() {
  const genres = ["Action", "Adventure", "Crime", "Romance"].sort();

  return (
    <div className="w-full min-h-screen mx-auto">
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
    </div>
  );
}
