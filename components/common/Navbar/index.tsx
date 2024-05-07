"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { PiFilmReel } from "react-icons/pi";
import ThemeButton from "@/components/common/Button/ThemeButton";
import { BiCart } from "react-icons/bi";
import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { usePathname } from "next/navigation";

export function Navbar(this: any) {
  const { setTheme } = useTheme();
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  const isSignInPage = pathname === "/auth/signin";
  const authLink = isSignInPage ? "/auth/signup" : "/auth/signin";
  const authText = isSignInPage ? "Sign Up" : "Sign In";

  return (
    <div className="flex w-full justify-between my-auto p-3 md:p-4 md:px-8 lg:px-10 border-b border-primary/50">
      <Link href="/">
        <div className="my-auto mt-2 md:mt-1.5 lg:mt-1 items-center flex justify-between">
          <PiFilmReel className="text-2xl lg:text-3xl my-auto" />
          <h1 className="font-jura my-auto text-center tracking-wide font-extrabold text-lg md:text-xl lg:text-2xl px-1">
            Cinemart
          </h1>
        </div>
      </Link>

      {/* MOBILE MENU */}
      <div className="flex my-auto md:hidden z-50 relative">
        <div className="flex relative justify-center items-center">
          <BiCart className="font-extrabold my-auto h-5 w-5 md:w-6 md:h-6 mx-5" />
          <p className="font-bold font-sans bg-slate-900 dark:bg-sky-50 p-0.5 rounded-full text-white dark:text-black absolute top-0 right-4 text-xs">
            0
          </p>
        </div>
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} rounded />
        {isOpen && (
          <div className="fixed z-40 top-0 w-2/3 h-full bg-sky-50 dark:bg-slate-900 opacity-95 flex flex-col left-0">
            {/* SIGNIN/SIGNUP */}
            <Link href={authLink}>
              <div className="flex py-3 pl-2">
                <FiLogIn className="text-xl my-auto" />
                <p className="font-mono text-sm pl-4">{authText}</p>
              </div>
            </Link>
            <div className="flex py-1">
              <ThemeButton />
              <p className="flex md:hidden text-center font-mono text-sm my-auto pl-1">
                Theme
              </p>
            </div>
          </div>
        )}
      </div>

      {/* DEKSTOP MENU, AUTH, CART AND TOOGLE THEME */}
      <div className="hidden md:flex justify-between md:w-48 lg:w-56">
        {/* SIGNIN/SIGNUP */}
        <Link href={authLink} className="my-auto">
          <div className="flex">
            <p className="font-mono font-semibold text-base">{authText}</p>
          </div>
        </Link>
        <div className="flex relative justify-center items-center">
          <BiCart className="font-extrabold my-auto h-5 w-5 md:w-6 md:h-6" />
          <p
            className="font-bold font-sans bg-slate-900 dark:bg-sky-50 p-0.5 rounded-full text-white dark:text-black
          absolute top-0 right-0 text-xs"
          >
            0
          </p>
        </div>
        <ThemeButton />
      </div>
    </div>
  );
}