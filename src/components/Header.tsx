"use client";

import { Button } from "@/components/ui/button";
import { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import { Input } from "./ui/input";
import { ChevronDown, CircleArrowDown, Clapperboard, Cross, Delete, DeleteIcon, LucideDelete } from "lucide-react";
import { GenresList } from "./GenresList";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// function vs functional component
/* <div className={`${searchButton == "none" ? "hidden" : "block"}`}> */

export const Header = () => {
    const { setTheme } = useTheme()



    return (
        <div>
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
                        className=" bg-white w-8 h-8 p-2 border rounded-lg border-solid border-[#E4E4E7]  hover:bg-indigo-100"
                    >
                        <img className="" src="/search.png" />
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-8 h-8 p-2 border rounded-lg border-solid border-[#E4E4E7]  hover:bg-indigo-100">
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

            <div className="flex justify-between items-center h-[59px] px-(--spacing-5) gap-2">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            className=" bg-whit w-8 h-8 p-2 border rounded-lg border-solid border-[#E4E4E7]  hover:bg-indigo-100 "
                        >
                            <ChevronDown className="text-black" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-(--spacing-5) flex-col items-center bg-white border-[3px] border-[#E4E5E9] rounded-2xl mx-5 mt-3"><GenresList /></PopoverContent>
                </Popover>
                <div className="flex gap-3 items-center">
                    <img className="w-5 h-5" src="/search.png" />
                    <Input
                        type="search"
                        className="w-full h-8 hover:bg-indigo-100"
                        placeholder="Search for movies..." />
                </div>
                <DeleteIcon className="w-5 h-5" />
            </div>

        </div>
    );
};
