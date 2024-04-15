import GenreTabs from "@/components/common/GenreTabs";
import { Navbar } from "@/components/common/Navbar";

export default function Home() {
  return (
    <div
      className="w-full min-h-screen mx-auto"
    >
      <div className="w-full mx-auto">
        <Navbar />
      </div>
      <div className="w-full p-3 md:p-4 lg:px-10 
      grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 
      gap-x-4 gap-y-3 md:gap-x-4 md:gap-y-3 lg:gap-x-8 lg:gap-y-4">
        <GenreTabs />
        <GenreTabs />
        <GenreTabs />
        <GenreTabs />
        <GenreTabs />
        <GenreTabs />
        <GenreTabs />
        <GenreTabs />
      </div>
    </div>
  );
}
