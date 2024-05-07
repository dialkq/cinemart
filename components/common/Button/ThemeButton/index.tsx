
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const ThemeButton = () => {
  const { setTheme } = useTheme();

  return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="p-0">
          <Button variant="ghost" size="icon" className="focus:bg-transparent">
            <Sun className="h-5 w-5 md:w-6 md:h-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 md:w-6 md:h-6rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  );
};

export default ThemeButton;
