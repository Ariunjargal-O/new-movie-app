"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Input } from "./ui/input";
import { ChevronDown, DeleteIcon, Search } from "lucide-react";
import { GenresList } from "./GenresList";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMediaQuery } from "react-responsive";

// function vs functional component
/* <div className={`${searchButton == "none" ? "hidden" : "block"}`}> */

export const Header = () => {
  const { setTheme } = useTheme();
  const [searchBox, setSearchBox] = useState(true);

  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  const onSearchHandle = () => {
    setSearchBox(false);
  };

  return (
    <div>
      {" "}
      {isMobile && (
        <div>
          {searchBox && (
            <div className="flex justify-between items-center h-[59px] px-(--spacing-5) gap-2">
              <Link href={`/`}>
                {" "}
                <div className="flex">
                  <img src="/icon-header-film.png" />
                  <p className="text-[16px], text-indigo-700 italic ml-2 font-bold leading-[20px] tracking-[0.32px]">
                    Movie Z
                  </p>
                </div>
              </Link>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="w-8 h-8 p-2 border rounded-lg border-solid border-[#E4E4E7]  hover:bg-indigo-100"
                  onClick={onSearchHandle}
                >
                  <Search/>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-8 h-8 p-2 border rounded-lg border-solid border-[#E4E4E7]  hover:bg-indigo-100"
                    >
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                      System
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          )}
          {!searchBox && (
            <div>
              <div className="flex justify-between items-center h-[59px] px-(--spacing-5) gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button 
                   variant="outline"
                    className=" bg-whit w-8 h-8 p-2 border rounded-lg border-solid border-[#E4E4E7]  hover:bg-indigo-100 ">
                      <ChevronDown/>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-(--spacing-5) flex-col items-center rounded-2xl mx-5 mt-3">
                    <GenresList />
                  </PopoverContent>
                </Popover>
                <div className="flex gap-3 items-center">
                <Search/>
                  <Input
                    type="search"
                    className="w-full h-8 hover:bg-indigo-100"
                    placeholder="Search for movies..."
                  />
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-8 h-8 p-2 border rounded-lg border-solid border-[#E4E4E7]  hover:bg-indigo-100"
                    >
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                      System
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          )}
        </div>
      )}
      {!isMobile && (
        <div>
          {searchBox && (
            <div className="flex justify-between items-center h-[59px] px-10 gap-6">
              <Link href={`/`}>
                {" "}
                <div className="flex">
                  <img src="/icon-header-film.png" />
                  <p className="text-[16px], text-indigo-700 italic ml-2 font-bold leading-[20px] tracking-[0.32px]">
                    Movie Z
                  </p>
                </div>
              </Link>
              <div className="flex gap-3">
                <div className="flex justify-between items-center h-[59px] gap-9">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button 
                      variant={"outline"}
                      className=" p-2 border rounded-lg border-solid border-[#E4E4E7] ">
                        <ChevronDown 
                        />
                        Genre
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-(--spacing-5)  items-center rounded-2xl mx-5 mt-3">
                      <GenresList />
                    </PopoverContent>
                  </Popover>
                  <div className="flex gap-3 items-center">
                    <Search
                    />
                    <Input
                      type="search"
                      className="w-auto hover:bg-indigo-100"
                      placeholder="Search for movies..."
                    />
                  </div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className=" p-3 border rounded-lg border-solid border-[#E4E4E7]  hover:bg-indigo-100"
                  >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
