import { useEffect, useState } from "react"
import { watchlistWhiteIcon } from "../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "./asyncActions";
import { setShouldAddToWatchlistModalOpen } from "./watchlistSlice";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
    const dispatch = useDispatch();
    const searchResult = useSelector((state) => state.searchResult)
    const [movies, setMovies] = useState(null)

    useEffect(() => {
        if (searchResult?.data)
            setMovies(searchResult.data);
    }, [searchResult])

    const handleMovieView = (movieId) => {
        dispatch(getMovieDetail(movieId))
    }

    const handleAddToWatchlist = () => {
        dispatch(setShouldAddToWatchlistModalOpen(true))
    }

    return (
        <div className="mt-8 grid grid-cols-5 gap-20">
            {movies?.Search && movies.Search.map((movie) => {
                return <MovieCard movie={movie} handleMovieView={handleMovieView} handleAddToWatchlist={handleAddToWatchlist} />
            })
            }
        </div>
    )
}