"use client";
import { Button } from "@/components/ui/button";
import { instance } from "@/axios-instance/axios-instance";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MovieType } from "@/constnants/Type";
import { BASE_IMAGE_URL } from "@/constnants";
import { Backpack, ChevronRight } from "lucide-react";
import Link from "next/link";

export const MovieList = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [genreMovies, setGenreMovies] = useState([]);

  const getMovies = async () => {
    try {
      const [upcoming, topRated, popular, genre] = await Promise.all([
        instance.get("/movie/upcoming"),
        instance.get("/movie/top_rated"),
        instance.get("/movie/popular"),
        instance.get("/genre/movie/list"),
      ]);
      setUpcomingMovies(upcoming.data.results);
      setTopRatedMovies(topRated.data.results);
      setPopularMovies(popular.data.results);
      setGenreMovies(genre.data.genres);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const details = {
    titles: ["Upcoming", "TopRated", "Popular"],
  };

  return (
    <div>
      {details.titles.map((title, index) => {
        let movieList: MovieType[] = [];
        if (title === "Upcoming") movieList = upcomingMovies;
        if (title === "TopRated") movieList = topRatedMovies;
        if (title === "Popular") movieList = popularMovies;
        console.log(movieList);
        return (
          <div key={title}>
            <div className="px-(--spacing-5)  w-full gap-(--spacing-5) flex justify-between">
              <p className="text-2xl not-italic font-semibold leading-8">
                {title}
              </p>

              <Link href={`/status/upcoming`}>
                <Button
                  variant="outline"
                  className="max-w-26  hover:bg-indigo-100"
                >
                  <div className="flex">
                    <span className="text-sm not-italic font-medium leading-4">
                      See more
                    </span>
                    <ChevronRight />
                  </div>
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-2 px-(--spacing-5)  py-(--spacing-8)">
              {movieList
                .map((movie: MovieType) => {
                  return (
                    <div key={movie.id}>
                      <Link href={`movieDetail/${movie.id}`}>
                        <Card
                          title={movie.title}
                          className="gap-2 py-0 h-[20rem]"
                        >
                          <img
                            className="rounded-t-lg w-auto h-auto"
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
                        </Card>
                      </Link>
                    </div>
                  );
                })
                .slice(0, 10)}
            </div>
          </div>
        );
      })}
    </div>
  );
};
