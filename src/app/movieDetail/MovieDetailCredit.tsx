"use client";
import { instance } from "@/axios-instance/axios-instance";
import { MovieDetailCreditType } from "@/constnants/Type";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

// type Props = {
//   id: string | undefined | string[];
// };

export const MovieDetailCredit = () => {
  const [movieCredit, setmovieCredit] = useState<MovieDetailCreditType[]>([]);
  const [movieCreditCrew, setMovieCreditCrew] =
    useState<MovieDetailCreditType[]>();
  const params = useParams();
  //   console.log(params)

  const getMovieDetailsCredit = async () => {
    const credit = await instance.get(
      `/movie/${params.id}/credits?language=en-UÒ`
    );
    console.log(credit);
    setmovieCredit(credit.data.cast);
    setMovieCreditCrew(credit.data.crew);
  };

  useEffect(() => {
    getMovieDetailsCredit();
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
          <div className="flex flex-col px-(--spacing-5) pt-(--spacing-5) pb-(--spacing-8)">
            <div className="flex justify-between items-center  ">
              <p className="text-[16px] not-italic font-bold leading-7">
                Director
              </p>
              <p className="text-[16px] not-italic font-normal leading-4">
                {
                  movieCredit?.find(
                    (cast) => cast.known_for_department === "Directing"
                  )?.name
                }
              </p>
            </div>

            <hr className="my-4 border-t-2 pb-(--spacing-5)"></hr>
            <div className="flex justify-between items-center ">
              <p className="text-[16px] not-italic font-bold leading-7">
                Writers
              </p>
              <p className="text-[16px] not-italic font-normal leading-4">
                {
                  movieCreditCrew?.find(
                    (crew) => crew.known_for_department === ""
                  )?.name
                }
              </p>
            </div>
            <hr className="my-4 border-t-2 pb-(--spacing-5)"></hr>
            <div className="flex justify-between items-center ">
              <p className="text-[16px] not-italic font-bold leading-7">
                Stars
              </p>
              <p className="text-[16px] not-italic font-normal leading-4 flex ">
                {/* {movieCredit?.map(
              (cast) => cast.known_for_department === "Acting" && cast.name
            ).slice(0, 3)} */}
                {
                  movieCredit?.find(
                    (cast) => cast.known_for_department === "Acting"
                  )?.name
                }
              </p>
            </div>
            <hr className="my-4 border-t-2"></hr>
          </div>
        </div>
      )}
      {!isMobile && (
        <div className="px-[100px]">
          <div className="flex flex-col pt-(--spacing-5) pb-(--spacing-8)">
            <div className="flex justify-between items-center  ">
              <p className="text-[16px] not-italic font-bold leading-7">
                Director
              </p>
              <p className="text-[16px] not-italic font-normal leading-4">
                {
                  movieCredit?.find(
                    (cast) => cast.known_for_department === "Directing"
                  )?.name
                }
              </p>
            </div>

            <hr className="my-4 border-t-2 pb-(--spacing-5)"></hr>
            <div className="flex justify-between items-center ">
              <p className="text-[16px] not-italic font-bold leading-7">
                Writers
              </p>
              <p className="text-[16px] not-italic font-normal leading-4">
                {
                  movieCreditCrew?.find(
                    (crew) => crew.known_for_department === ""
                  )?.name
                }
              </p>
            </div>
            <hr className="my-4 border-t-2 pb-(--spacing-5)"></hr>
            <div className="flex justify-between items-center ">
              <p className="text-[16px] not-italic font-bold leading-7">
                Stars
              </p>
              <p className="text-[16px] not-italic font-normal leading-4 flex ">
                {/* {movieCredit?.map(
              (cast) => cast.known_for_department === "Acting" && cast.name
            ).slice(0, 3)} */}
                {
                  movieCredit?.find(
                    (cast) => cast.known_for_department === "Acting"
                  )?.name
                }
              </p>
            </div>
            <hr className="my-4 border-t-2"></hr>
          </div>
        </div>
      )}
    </div>
  );
};
