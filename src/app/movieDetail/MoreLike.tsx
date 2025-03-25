"use client";
import { instance } from "@/axios-instance/axios-instance";
import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import { MovieDetailType } from "@/constnants/Type";
import { ChevronRight, Key } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const MoreLike = () => {
  const params = useParams();
  // console.log(params)
  const [moreLikeList, setMoreLikeList] = useState<MovieDetailType[]>();

  const getMoreLikeMovieList = async () => {
    const moreLikeMovieList = await instance.get(
      `/movie/${params.id}/similar?language=en-US&page=1`
    );
    // console.log(moreLikeMovieList);
    setMoreLikeList(moreLikeMovieList.data.results);
  };

  useEffect(() => {
    getMoreLikeMovieList();
  }, []);

  return (
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
          ?.map((movie: MovieDetailType) => {
            return (
              <Link href={`${movie.id}`} key={movie.id}>
                <Card title={movie.title} className="gap-2 py-0 h-[20rem]">
                  <img
                    className="w-[157px] h-auto rounded-t-lg "
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  />

                  <CardDescription>
                    <div className="p-(--spacing-2) gap-1 flex flex-col ">
                      <div className="flex gap-1 items-center">
                        <img className="w-4 h-4" src="/icon-star.png" />
                        <p className="text-xs font-medium leading-4 text-black">
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
            );
          })
          .slice(0, 2)}
      </div>
    </div>
  );
};

// zuvhun hoyrhon hesgiig hucheer haruulj bgaa. eniig scroll hiidg bolgoh
