"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation'

interface GenreTabsProps {
  genre: string;
}

const GenreTabs: React.FC<GenreTabsProps> = ({ genre }) => {
  const pathname = usePathname()
  const isActive = pathname === '/action';
  const isActionGenre = genre.toLowerCase() === 'action';
  const tabStyles = `py-2 rounded-lg ${
    isActionGenre && isActive ? 'bg-black dark:bg-sky-200' : 'bg-slate-800 dark:bg-sky-50'
  }`;

  return (
    <Link href={`/${genre.toLowerCase()}`}>
      <div className={tabStyles}>
        <p className="text-sky-50 text-center dark:text-slate-800 font-bold">
          {genre}
        </p>
      </div>
    </Link>
  );
};

export default GenreTabs;