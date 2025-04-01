"use client";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { useEffect, useState } from "react";
import { instance } from "@/axios-instance/axios-instance";
import { MovieType } from "@/constnants/Type";
import Link from "next/link";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";
import { Play } from "lucide-react";

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

  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  return (
    <div>
      {isMobile && (
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
                    <Link href={`/movieDetail/${movie.id}`}>
                      <div className="flex flex-col w-auto">
                        <img
                          className="w-full"
                          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        />
                        <div className="px-(--spacing-5) pt-(--spacing-5) flex flex-wrap">
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
                           <Play/>
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
      )}
      {!isMobile && (
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
                    <Link href={`/movieDetail/${movie.id}`}>
                      <div className="flex flex-col w-auto relative">
                        <img
                          className="w-full"
                          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        />
                        <div className="pl-10 h-auto w-120 pt-(--spacing-5) flex flex-wrap absolute gap-4 place-self-star justify-self-end">
                          <div className="flex flex-col gap-3">
                            <div className="flex flex-col">
                              {" "}
                              <p className="text-[18px] not-italic font-normal leading-6 text-white">
                                Now playing:
                              </p>
                              <p className="text-4xl not-italic font-bold leading-8 text-white">
                                {movie.title}
                              </p>
                            </div>
                            <div className="flex">
                              <img className="w-4 h-4" src="icon-star.png" />
                              <p className="text-3 font-medium leading-4 text-white">
                                {movie.vote_average}
                              </p>
                              <span className="text-3 font-normal leading-4 text-(--text-text-muted-foreground)">
                                /10
                              </span>
                            </div>
                          </div>
                          <p className="text-[14px] font-normal not-italic leading-5 text-ellipsis line-clamp-4 max-h-30 text-white">
                            {movie.overview}
                          </p>
                          {/* <Link href={`/trailer/${movie.id}`}> */}{" "}
                          <Button className="" variant={"outline"}>
                            {" "}
                           <Play/>
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
      )}
    </div>
  );
};
