"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import Link from "next/link";
import { MovieDetailType } from "@/constnants/Type";
import { instance } from "@/axios-instance/axios-instance";
import { icons, Play } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { BASE_IMAGE_URL } from "@/constnants";

export const MovieDetailHeader = () => {
  const [openMovieDetail, setopenMovieDetail] = useState<MovieDetailType>();
  const params = useParams();
  // console.log(params.id);

  const getMovieDetail = async () => {
    const movieDetail = await instance.get(`movie/${params.id}?language=en-US`);
    // console.log(movieDetail.data);
    setopenMovieDetail(movieDetail.data);
  };
  useEffect(() => {
    getMovieDetail();
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
          <div className="flex justify-between pt-8 px-(--spacing-5) pb-(--spacing-4)">
            <div>
              <p className="text-2xl not-italic font-semibold leading-8 ">
                {openMovieDetail?.title}
              </p>
              <p className="text-[14px] not-italic font-normal leading-5">
                {openMovieDetail?.release_date} {openMovieDetail?.runtime}min
              </p>
            </div>
            <div className="flex items-center gap-1">
              <img className="w-7 h-7" src="/icon-star.png" />
              <div className="flex flex-col text-center">
                <div className="flex">
                  <p className="text-3 font-medium leading-4">
                    {openMovieDetail?.vote_average}
                  </p>
                  <span className="text-3 font-normal leading-4 text-(--text-text-muted-foreground)">
                    /10
                  </span>
                </div>
                <p className="text-3 font-medium leading-4 text-(--text-text-muted-foreground)">
                  {openMovieDetail?.vote_count}
                </p>
              </div>
            </div>
          </div>

          <div className="relative mb-(--spacing-8)">
            <img
              className="w-screen relative"
              src={`https://image.tmdb.org/t/p/original/${openMovieDetail?.backdrop_path}`}
            ></img>
            <div className=" absolute flex justify-between bottom-3 left-3 gap-3 items-center">
              <Button
                className="bg-white border-[1px] border-black rounded-full hover:bg-indigo-400 w-10 h-10"
                variant="outline"
              >
                {/* <img className="w-6 h-6" src="icon-black-play.png"></img> */}
                <Play />
              </Button>
              <p className="text-[16px] not-italic font-bold leading-6 text-white ">
                Play Trailer
              </p>

              <p className="text-[16px] not-italic font-normal leading-6 text-white"></p>
            </div>
          </div>

          <div className="flex gap-8 px-(--spacing-5)">
            <img
              className="w-[100px] h-[179px]"
              src={`https://image.tmdb.org/t/p/original/${openMovieDetail?.poster_path}`}
            />
            <div>
              <div className="flex flex-wrap">
                {openMovieDetail?.genres.map((g) => (
                  <Link href={`/status/${g.id}`} key={g.id}>
                    <div key={g.id} className="">
                      <Button className="bg-white border-[#E4E4E7] border-1 rounded-4xl text-black font-semibold leading-4 text-[16px] m-1">
                        {g.name}
                      </Button>
                    </div>
                  </Link>
                ))}
              </div>
              <p className="text-[16px] not-italic font-normal leading-6 pt-5">
                {openMovieDetail?.overview}
              </p>
            </div>
          </div>
        </div>
      )}
      {!isMobile && (
        <div className="px-[100px]">
          <div className="flex justify-between pt-8 px-(--spacing-5) pb-(--spacing-4)">
            <div>
              <p className="text-2xl not-italic font-semibold leading-8 ">
                {openMovieDetail?.title}
              </p>
              <p className="text-[14px] not-italic font-normal leading-5">
                {openMovieDetail?.release_date} {openMovieDetail?.runtime}min
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium not-italic leading-4">Rating</p>
              <div className="flex items-center gap-1">
                <img className="w-7 h-7" src="/icon-star.png" />
                <div className="flex flex-col text-center">
                  <div className="flex">
                    <p className="text-3 font-medium leading-4">
                      {openMovieDetail?.vote_average}
                    </p>
                    <span className="text-3 font-normal leading-4 text-(--text-text-muted-foreground)">
                      /10
                    </span>
                  </div>
                  <p className="text-3 font-medium leading-4 text-(--text-text-muted-foreground)">
                    {openMovieDetail?.vote_count}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-8 mb-(--spacing-8)  ">
            <img className="h-100"
              src={`${BASE_IMAGE_URL}/w300${openMovieDetail?.poster_path}`}
            />
            <div className="relative">
              <img
                className="w-fit relative"
                src={`https://image.tmdb.org/t/p/original/${openMovieDetail?.backdrop_path}`}
              />
              <div className="absolute flex justify-between left-10 bottom-5 gap-3 items-center">
                <Button
                size="icon"
                  className="dark:bg-black rounded-full"
                  variant="outline">
                  <Play/>
                </Button>
                <p className="text-[16px] not-italic font-bold leading-6 text-white ">
                  Play Trailer
                </p>
                <p className="text-[16px] not-italic font-normal leading-6 text-white"></p>
              </div>
            </div>
          </div>

          <div className="flex gap-8 ">
            <img
              className="w-[100px] h-[179px]"
              src={`https://image.tmdb.org/t/p/original/${openMovieDetail?.poster_path}`}
            />
            <div>
              <div className="flex flex-wrap gap-4">
                {openMovieDetail?.genres.map((g) => (
                  <Link href={`/status/${g.id}`} key={g.id}>
                    <div key={g.id} className="">
                      <Button 
                      variant={"outline"}
                      className=" border-[#E4E4E7] border-1 rounded-4xl font-semibold leading-4 text-[16px] ">
                        {g.name}
                      </Button>
                    </div>
                  </Link>
                ))}
              </div>
              <p className="text-[16px] not-italic font-normal leading-6 pt-5">
                {openMovieDetail?.overview}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
