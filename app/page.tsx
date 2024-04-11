import { Navbar } from "@/components/common/Navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen mx-auto bg-gradient-to-tr from-sky-100 via-neutral-50 to-sky-50 dark:bg-black">
      <div className="w-full mx-auto">
        <Navbar />
      </div>
    </div>
  );
}
