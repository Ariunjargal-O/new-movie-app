"use client";

import { instance } from "@/axios-instance/axios-instance";
import { Button } from "@/components/ui/button";
import { GenreType, MovieType } from "@/constnants/Type";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { BASE_IMAGE_URL } from "@/constnants";
import { ChevronRight } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "next-themes";

// type MovieListPropsType = {
//   setMovieList: Dispatch<SetStateAction<MovieType[]>>;
//   movieList: MovieType[];
// };

const GenreMovieListPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const genreName = searchParams.get("name");
  const genreId = params.id;
  // console.log(genreName);

  const [genresMovieList, setGenresMovieList] = useState<MovieType[]>([]);
  const getGenresMovie = async () => {
    const genresMovie = await instance.get(
      `/discover/movie?language=en&with_genres=${params.id}&page=${`1`}`
    );
    // console.log(genresMovie);
    setGenresMovieList(genresMovie.data.results);
  };
  useEffect(() => {
    getGenresMovie();
  }, []);

  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);
  const { setTheme } = useTheme();

  return (
    <div>
      {isMobile && (
        <div>
          <p className="px-(--spacing-5)  w-full gap-(--spacing-5) flex justify-between text-2xl not-italic font-semibold leading-8">
            {genreName}
          </p>

          <div className="grid grid-cols-2 justify-center gap-3 px-(--spacing-5) py-(--spacing-8)">
            {genresMovieList
              .map((movie: MovieType) => {
                return (
                  <Link href={`/movieDetail/${movie.id}`} key={movie.id}>
                    <Card title={movie.title} className="gap-4 py-0">
                      <CardContent className="p-0">
                        <img
                          className="rounded-t-lg "
                          src={`${BASE_IMAGE_URL}/w300${movie.poster_path}`}
                        />

                        <CardDescription>
                          <div className="p-(--spacing-2)  gap-1 flex flex-col ">
                            <div className="flex gap-1 items-center">
                              <img className="w-4 h-4" src="/icon-star.png" />
                              <p className="text-xs font-medium leading-4">
                                {movie.vote_average}
                              </p>
                              <span className="text-xs font-normal leading-4 text-(--text-text-muted-foreground)">
                                /10
                              </span>
                            </div>
                            <h1 className=" text-[14px] font-normal leading-5 not-italic text-ellipsis  pt-1">
                              {movie.title}
                            </h1>
                          </div>
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })
              .slice(0, 10)}
          </div>
        </div>
      )}
      {!isMobile && (
        <div>
          <div>
            <p className="px-(--spacing-5)  w-full gap-(--spacing-5) flex justify-between text-2xl not-italic font-semibold leading-8">
              {genreName}
            </p>

            <div className="grid grid-cols-5 gap-5 px-(--spacing-5)  py-(--spacing-8)">
              {genresMovieList.map((movie: MovieType) => {
                return (
                  <div key={movie.id}>
                    <Link href={`/movieDetail/${movie.id}`}>
                      <Card title={movie.title} className="p-0 ">
                        <CardContent className="p-0">
                          <img
                            className="rounded-t-lg "
                            src={`${BASE_IMAGE_URL}/w300${movie.poster_path}`}
                          />

                          <CardDescription>
                            <div className="p-(--spacing-2) gap-1 flex flex-col ">
                              <div className="flex gap-1 items-center">
                                <img className="w-4 h-4" src="/icon-star.png" />
                                <p className="text-xs font-medium leading-4">
                                  {movie.vote_average}
                                </p>
                                <span className="text-xs font-normal leading-4 text-(--text-text-muted-foreground)">
                                  /10
                                </span>
                              </div>
                              <h1 className=" text-[14px] font-normal leading-5 not-italic text-ellipsis  pt-1">
                                {movie.title}
                              </h1>
                            </div>
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                );
              })}
            </div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenreMovieListPage;
