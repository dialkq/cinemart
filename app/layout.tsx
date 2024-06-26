import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { jura } from "./font";
import Footer from "@/components/common/Footer";
import CartProvider from "@/context/Cart";

export const metadata: Metadata = {
  title: "Cinemart",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "w-full min-h-screen mx-auto bg-gradient-to-tr from-sky-100 via-neutral-50 to-sky-100 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-900",
          jura.variable
        )}
      >
        <CartProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}