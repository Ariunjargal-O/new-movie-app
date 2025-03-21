import { instance } from "@/axios-instance/axios-instance";
import { MovieDetailType } from "@/constnants/Type";
import path from "path";
import { useEffect, useState } from "react";


export const useMovies = (path:string) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState("");
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
    const [selectedSort, setSelectedSort] = useState<string>("popularity.desc");
    const [selectedYear, setSelectedYear] = useState<string>("2021");
    const [selectedRating, setSelectedRating] = useState<string>("7");
    const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
    const [selectedRuntime, setSelectedRuntime] = useState<string>("120");
    const [selectedPage, setSelectedPage] = useState<string>("1");
    const [selectedCertification, setSelectedCertification] = useState<string>("R");
    const [selectedCountry, setSelectedCountry] = useState<string>("US");
    const [selectedCompany, setSelectedCompany] = useState<string>("20th Century Fox");
    const [selectedActor, setSelectedActor] = useState<string>("Tom Cruise");
    const [selectedDirector, setSelectedDirector] = useState<string>("Steven Spielberg");
    const [selectedProducer, setSelectedProducer] = useState<string>("Steven Spielberg");
    const [selectedWriter, setSelectedWriter] = useState<string>("Steven Spielberg");
    const [selectedCinematographer, setSelectedCinematographer] = useState<string>("Steven Spielberg");
    const [selectedEditor, setSelectedEditor] = useState<string>("Steven Spielberg");
    const [selectedComposer, setSelectedComposer] = useState<string>("Steven Spielberg");

const getMovie = async () => {
        const res = await instance.get(path);
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
        setLoading(false);
        setLoading(false);
    }

useEffect(() => {
    getMovie();
},[]);

return {movies, loading, error, page, totalPages, search, selectedGenre, selectedSort, selectedYear, selectedRating, selectedLanguage, selectedRuntime, selectedPage, selectedCertification, selectedCountry, selectedCompany, selectedActor, selectedDirector, selectedProducer, selectedWriter, selectedCinematographer, selectedEditor, selectedComposer, getMovie, setSelectedGenre, setSelectedSort, setSelectedYear, setSelectedRating, setSelectedLanguage, setSelectedRuntime, setSelectedPage, setSelectedCertification, setSelectedCountry, setSelectedCompany, setSelectedActor, setSelectedDirector, setSelectedProducer, setSelectedWriter, setSelectedCinematographer, setSelectedEditor, setSelectedComposer};
}