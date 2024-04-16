import Link from "next/link";

interface GenreTabsProps {
  genre: string;
}

const GenreTabs: React.FC<GenreTabsProps> = ({ genre }) => {
  return (
    <Link href={`/${genre.toLowerCase()}`}>
      <div className="bg-slate-800 dark:bg-sky-50 py-2 rounded-lg">
        <p className="text-sky-50 text-center dark:text-slate-800 font-bold">
          {genre}
        </p>
      </div>
    </Link>
  );
};

export default GenreTabs;
