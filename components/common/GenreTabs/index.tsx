"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface GenreTabsProps {
  genre: string;
}

const GenreTabs: React.FC<GenreTabsProps> = ({ genre }) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentGenre = genre.toLowerCase();
  const isActive = pathname === `/${currentGenre}`;

  const tabStyles = `hover:bg-black dark:hover:bg-sky-200 
   text-sm md:text-base py-2 md:py-3 rounded-md
  ${isActive ? "bg-black dark:bg-sky-200" : "bg-slate-800 dark:bg-sky-50"}`;

  return (
    <Link href={`/${currentGenre}`}>
      <div className={tabStyles}>
        <p className="text-sky-50 text-center tracking-wider lg:tracking-widest font-mono dark:text-slate-800 font-bold">
          {genre}
        </p>
      </div>
    </Link>
  );
};

export default GenreTabs;
