import { Navbar } from "@/components/common/Navbar";

export default function Home() {
  return (
    <div
      className="w-full min-h-screen mx-auto bg-gradient-to-tr from-sky-100 via-neutral-50 to-sky-100 
      dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="w-full mx-auto">
        <Navbar />
      </div>
    </div>
  );
}
