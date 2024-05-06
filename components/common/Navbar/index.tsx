"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { PiFilmReel } from "react-icons/pi";
import ThemeButton from "@/components/common/Button/ThemeButton";
import { BiCart } from "react-icons/bi";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
export function Navbar(this: any) {
  const { setTheme } = useTheme();

  return (
    <div className="flex w-full justify-between my-auto p-3 md:p-4 md:px-8 lg:px-10 border-b border-primary/50">
      <Link href="/">
        <div className="mt-1.5 lg:mt-1 items-center flex justify-between">
          <PiFilmReel className="text-2xl lg:text-3xl my-auto" />
          <h1 className="font-jura my-auto tracking-wide font-extrabold text-lg md:text-xl lg:text-2xl px-1">
            Cinemart
          </h1>
        </div>
      </Link>

      {/* MOBILE MENU */}
      <div className="flex my-auto md:hidden z-50">
        <div className="flex relative justify-center items-center">
          <BiCart className="font-extrabold my-auto h-5 w-5 md:w-6 md:h-6 mx-5" />
          <p className="font-bold font-sans bg-slate-900 dark:bg-sky-50 p-0.5 rounded-full text-white dark:text-black absolute top-0 right-4 text-xs">
            0
          </p>
        </div>
        <Menu pageWrapId={"page-wrap"} width={200} right className="text-black">
          <ThemeButton />
        </Menu>
      </div>

      {/* DEKSTOP MENU, AUTH, CART AND TOOGLE THEME */}
      <div className="hidden md:flex">
        <div className="flex relative justify-center items-center">
          <BiCart className="font-extrabold my-auto h-5 w-5 md:w-6 md:h-6 mx-5" />
          <p className="font-bold font-sans bg-slate-900 dark:bg-sky-50 p-0.5 rounded-full text-white dark:text-black absolute top-0 right-4 text-xs">
            0
          </p>
        </div>
        <ThemeButton />
      </div>
    </div>
  );
}
