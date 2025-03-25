"use client";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { useEffect, useState } from "react";
import { instance } from "@/axios-instance/axios-instance";
import { MovieType } from "@/constnants/Type";
import Link from "next/link";
import { Button } from "./ui/button";

export const NowPlayingList = () => {
  const [nowPlayingList, setNowPlaying] = useState<MovieType[]>([]);

  const getNowPlayingList = async () => {
    const nowPlaying = await instance.get("/movie/now_playing");
    // console.log(nowPlaying)
    setNowPlaying(nowPlaying.data.results);
  };

  useEffect(() => {
    getNowPlayingList();
  }, []);

  return (
    <div className="pb-(--spacing-8)">
      {" "}
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {nowPlayingList.map((movie: MovieType) => {
            return (
              <CarouselItem key={movie.id}>
                <Link href={`/movieDetails/${movie.id}`}>
                  <div className="flex flex-col w-auto">
                    <img
                      className="w-full"
                      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    />
                    <div className="px-(--spacing-5) pt-(--spacing-5) flex flex-wrap justify-evenly">
                      <div className="flex w-full justify-between gap-[2px]">
                        <div className="flex flex-col">
                          {" "}
                          <p className="text-[14px] not-italic font-normal leading-5">
                            Now playing:
                          </p>
                          <p className="text-2xl not-italic font-semibold leading-8 ">
                            {movie.title}
                          </p>
                        </div>
                        <div className="flex">
                          <img className="w-4 h-4" src="icon-star.png" />
                          <p className="text-3 font-medium leading-4">
                            {movie.vote_average}
                          </p>
                          <span className="text-3 font-normal leading-4 text-(--text-text-muted-foreground)">
                            /10
                          </span>
                        </div>
                      </div>
                      <p className="text-[14px] font-normal not-italic leading-5 mt-4 text-ellipsis line-clamp-4 max-h-30">
                        {movie.overview}
                      </p>
                      {/* <Link href={`/trailer/${movie.id}`}> */}{" "}
                      <Button className="mt-4">
                        {" "}
                        <img src="icon-play.png" />
                        Watch Trailer
                      </Button>
                      {/* </Link> */}
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
