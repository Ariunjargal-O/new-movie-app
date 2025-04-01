"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Footer = () => {
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);
  return (
    <div>
      {isMobile && (
        <div>
          <div className="bg-indigo-700 p-(--spacing-5)">
            <div>
              <Link href={`/`}>
                <div className="flex ">
                  <img src="/icon-footer-film.png" />
                  <p className="text-[16px], text-[#FAFAFA] italic ml-2 font-bold leading-[20px] tracking-[0.32px]">
                    Movie Z
                  </p>
                </div>
              </Link>
              <p className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic pt-4">
                © 2024 Movie Z. All Rights Reserved
              </p>
            </div>
            <div className="flex justify-between pt-(--spacing-7)">
              <div>
                <p className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic pb-4 text-[20px]">
                  Contact Information
                </p>
                <div className="flex gap-3 items-center pb-6">
                  <img className="w-4 h-4" src="icon-mail.png" />
                  <div className="flex flex-col p">
                    <p className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic ">
                      Email:
                    </p>
                    <p className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic ">
                      ariMovieZ@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <img className="w-4 h-4" src="icon-phone.png" />
                  <div className="flex flex-col">
                    <p className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic ">
                      Phone:
                    </p>
                    <p className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic ">
                      +976 8698-1230
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 pr-6">
                <h6 className="text-[#FAFAFA] text-[20px] font-normal leading-5 non-italic ">
                  Follow us
                </h6>
                <a
                  href="#"
                  className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic "
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic "
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic "
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic "
                >
                  Youtube
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isMobile && (
        <div>
          <div className="bg-indigo-700 py-10 px-(--spacing-7) flex justify-between">
            <div className="px-13">
              <Link href={`/`}>
                <div className="flex ">
                  <img src="/icon-footer-film.png" />
                  <p className="text-[16px], text-[#FAFAFA] italic ml-2 font-bold leading-[20px] tracking-[0.32px]">
                    Movie Z
                  </p>
                </div>
              </Link>
              <p className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic pt-4">
                © 2024 Movie Z. All Rights Reserved
              </p>
            </div>
            <div className="flex justify-between px-16 gap-[96px]">
              <div>
                <p className="text-[#FAFAFA] text-[20px] font-normal leading-5 non-italic pb-4">
                  Contact Information
                </p>
                <div className="flex gap-3 items-center pb-6 pl-4 ">
                  <img sizes="icon" src="/icon-mail.png" />
                  <div className="flex flex-col p">
                    <p className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic ">
                      Email:
                    </p>
                    <p className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic ">
                      ariMovieZ@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-center pl-4 ">
                  <img sizes="icon" src="/icon-phone.png" />
                  <div className="flex flex-col">
                    <p className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic ">
                      Phone:
                    </p>
                    <p className="text-[#FAFAFA] text-[14px] font-normal leading-5 non-italic ">
                      +976 8698-1230
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h6 className="text-[#FAFAFA] text-[20px] font-normal leading-5 non-italic ">
                  Follow us
                </h6>
                <a
                  href="#"
                  className="text-[#FAFAFA] text-[14px] font-normal pl-4 leading-5 non-italic "
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-[#FAFAFA] text-[14px] font-normal pl-4 leading-5 non-italic "
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-[#FAFAFA] text-[14px] font-normal pl-4 leading-5 non-italic "
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-[#FAFAFA] text-[14px] font-normal pl-4 leading-5 non-italic "
                >
                  Youtube
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
