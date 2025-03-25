import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import {  GenreType } from "@/constnants/Type";

import { instance } from "@/axios-instance/axios-instance";
import { ChevronRight, ChevronRightCircle, ChevronRightIcon, ChevronRightSquare, ChevronsRightIcon, LucideChevronsRight } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";

export const GenresList = () => {
    const [genresLists, setGenresList] = useState<GenreType[]>([]);


    const getGenresList = async () => {
        const genresList = await instance.get("/genre/movie/list");
        // console.log(genresList);
        setGenresList(genresList.data.genres);
    };

    useEffect(() => {
        getGenresList();
    }, []);
    // const onHandle = (genreId: number) => {
    //     // console.log(genreId)
    //     setSelectedGenre(genreId);
    // };

    return (
        <div className="flex flex-wrap gap-2">
            <p className="text-2xl font-semibold not-italic leading-8 pb-1">
                        Genres
                    </p>
                        <p className="text-base not-italic font-normal leading-6">
                            See lists of movies by genre
                        </p>
                        <hr className="my-4 border-t-2"></hr>
           {genresLists.map((genre:GenreType) => (
            
            <Link href={`/status/genre/${genre.id}`} key={genre.id}>
                <Button key={genre.id} variant="outline">
                    {genre.name}
                    <ChevronRight className="w-3 h-3 text-black" />
                </Button>
            </Link>
        ))}


        </div>

    );
};