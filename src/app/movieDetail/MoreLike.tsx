"use client";
import { instance } from "@/axios-instance/axios-instance";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { BASE_IMAGE_URL } from "@/constnants";
import { MovieDetailType, MovieType } from "@/constnants/Type";
import { ChevronRight, Key } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const MoreLike = () => {
  const params = useParams();
  console.log(params);
  const [moreLikeList, setMoreLikeList] = useState<MovieDetailType[]>([]);

  const getMoreLikeMovieList = async () => {
    const moreLikeMovieList = await instance.get(
      `/movie/${params.id}/similar?language=en-US&page=1`
    );
    console.log(moreLikeMovieList);
    setMoreLikeList(moreLikeMovieList.data.results);
  };

  useEffect(() => {
    getMoreLikeMovieList();
  }, []);

  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  return (
    <div>
      {isMobile && (
        <div>
          <div className="px-(--spacing-5) pt-8 w-full gap-(--spacing-5) flex justify-between ">
            <p className="text-2xl not-italic font-semibold leading-8">
              More like this
            </p>

            <Link href={`/status/seeMore/${params.id}`}>
              <Button variant="outline" className="max-w-26 ">
                <div className="flex">
                  <span className="text-sm not-italic font-medium leading-4">
                    See more
                  </span>
                  <ChevronRight />
                </div>
              </Button>
            </Link>
          </div>
          <div className="px-(--spacing-5) py-(--spacing-8) w-full gap-(--spacing-5) grid grid-cols-2">
            {moreLikeList
              .map((movie: MovieDetailType) => {
                return (
                  <Link href={`${movie.id}`} key={movie.id}>
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
                );
              })
              .slice(0, 2)}
          </div>
        </div>
      )}
      {!isMobile && (
        <div className="px-[100px]">
          <div className=" w-full gap-(--spacing-5) flex justify-between ">
            <p className="text-2xl not-italic font-semibold leading-8">
              More like this
            </p>

            <Link href={`/status/seeMore/${params.id}`}>
              <Button variant="outline" className="max-w-26 ">
                <div className="flex">
                  <span className="text-sm not-italic font-medium leading-4">
                    See more
                  </span>
                  <ChevronRight />
                </div>
              </Button>
            </Link>
          </div>
          <div className="py-(--spacing-8) gap-(--spacing-5) grid grid-cols-5">
            {moreLikeList.map((movie: MovieDetailType) => {
              return (
                <Link href={`${movie.id}`} key={movie.id}>
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
              );
            }).slice(0,5)}
          </div>
        </div>
      )}
    </div>
  );
};

// zuvhun hoyrhon hesgiig hucheer haruulj bgaa. eniig scroll hiidg bolgoh
