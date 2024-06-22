import { useEffect, useState } from "react"
import { watchlistWhiteIcon } from "../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "./asyncActions";
import { setShouldAddToWatchlistModalOpen } from "./watchlistSlice";

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
                return (
                    <div className="flex flex-col border rounded bg-gray-50">
                        <div className="absolute w-16 h-16 z-10" onClick={handleAddToWatchlist}>
                            <img className="" src={watchlistWhiteIcon} alt="Collection Icon" />
                        </div>
                        <div onClick={() => handleMovieView(movie.imdbID)}>
                            <div>
                                <img className="h-[310px] w-full object-cover" src={movie.Poster} alt="Movie Poster" />
                            </div>
                            <div className="py-2 my-[auto]">
                                {movie.Title}
                                <br />
                                ({movie.Year})
                            </div>
                        </div>
                    </div>)
            })
            }
        </div>
    )
}