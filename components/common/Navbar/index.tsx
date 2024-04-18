"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { PiFilmReel } from "react-icons/pi";
import ThemeButton from "@/components/common/Button/ThemeButton";
import { BiCart } from "react-icons/bi";
import Link from "next/link";
export function Navbar() {
  const { setTheme } = useTheme();

  return (
    <div className="flex w-full justify-between p-3 md:p-4 md:px-8 lg:px-10 border-b border-primary/50">
      <Link href="/">
        <div className="my-auto flex justify-between">
          <PiFilmReel className="text-2xl lg:text-3xl my-auto" />
          <h1 className="font-jura tracking-wide font-extrabold text-lg md:text-xl lg:text-2xl px-1">
            Cinemart
          </h1>
        </div>
      </Link>

      {/* TOOGLE THEME */}
      <div className="flex">
        <BiCart className="font-extrabold my-auto h-5 w-5 md:w-6 md:h-6 mx-5" />
        <ThemeButton />
      </div>
    </div>
  );
}
