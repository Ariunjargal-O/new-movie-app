// "use client";
// import { instance } from "@/axios-instance/axios-instance";
// import {
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import { Pagination } from "@/components/ui/pagination";
// import { MovieType } from "@/constnants/Type";
// import { useParams, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// const Page = () => {
//   const params = useParams();
//   const searchParams = useSearchParams();
// const [genreList, setGenreList] = useState()

// //   const { movies, loading, error, totalPages } = useMovies(
// //     `/movie/${params.name}?language=en-US&page=${searchParams.get("page")}`
// //   );


//   const getGenreList = async () => {
//     const genreMList = await instance.get(`/movie/${params.name}?language=en-US&page=1`)

//     // console.log(genreMList)
//     setGenreList(genreMList.data.results)
//   }

//   useEffect(() => {
//     getGenreList()
//   },[])
// //   const [currentPage, setCurrentPage] = useState(searchParams.get("page") || 1);
// //   const [paginationArray, setPaginationArray] = useState<number[]>();

// //   useEffect(() => {
// //     const temp = Array.from(
// //       { length: 4 },
// //       (_, index) => index + 1 + Number(currentPage)
// //     );

// //     setPaginationArray(temp);
// //   }, [totalPages, currentPage, searchParams]);

//   // console.log(paginationArray);

//   return (
//     <div>
//       {params.name}
//       <br />

//       <div className="grid grid-cols-5 gap-4">
//         {genreList.map((movie:MovieType) => (
//           <MovieCard movie={movie} />
//         ))}
//       </div>

//       <Pagination>
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationPrevious
//               onClick={() => setCurrentPage((prev) => Number(prev) - 1)}
//             />
//           </PaginationItem>

//           {paginationArray?.map((_, index) => (
//             <PaginationItem key={index}>
//               <PaginationLink href={`/status/${params.name}?page=${index + 1}`}>
//                 {index + 1}
//               </PaginationLink>
//             </PaginationItem>
//           ))}
//           <PaginationItem>
//             <PaginationEllipsis />
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationNext
//               onClick={() => setCurrentPage((prev) => Number(prev) + 1)}
//             />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     </div>
//   );
// };

// export default Page;