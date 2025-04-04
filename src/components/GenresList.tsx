import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GenreType } from "@/constnants/Type";

import { instance } from "@/axios-instance/axios-instance";
import { ChevronRight } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { useParams, useSearchParams } from "next/navigation";
import { useTheme } from "next-themes";


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

  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);
  const { setTheme } = useTheme();

// console.log(genresLists);

  return (
    <div>
        
      {isMobile && (
        <div className="flex flex-wrap gap-2">
          <p className="text-2xl font-semibold not-italic leading-8">
            Genres
          </p>
          <p className="text-base not-italic font-normal leading-6 border-b border-black dark:border-white">
            See lists of movies by genre
          </p>
          
          {/* <hr className="my-4 border-t border-black"></hr> */}
          {genresLists.map((genre: GenreType) => (
            <Link href={`/status/genre/${genre.id}?name=${genre.name}`} key={genre.id}>
              <Button key={genre.id} variant="outline">
                {genre.name}
                <ChevronRight/>
              </Button>
            </Link>
          ))}
        </div>
      )}
      {!isMobile && (
        <div className="flex flex-wrap gap-2  ">
          <p className="text-2xl font-semibold not-italic leading-8 ">
            Genres
          </p>
          <p className="text-base not-italic font-normal leading-6 my-4 border-b border-black dark:border-white pb-2">
            See lists of movies by genre
          </p>
          <hr className="my-4 border-t border-black"></hr>
          {genresLists.map((genre: GenreType) => (
            <Link href={`/status/genre/${genre.id}?name=${genre.name}`} key={genre.id}>
              <Button key={genre.id} variant="outline" className="">
                {genre.name}
                <ChevronRight />
              </Button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
