import { useDispatch } from "react-redux"
import { watchlistWhiteIcon } from "../assets/icons"
import { setSelectedMovie } from "./watchlistSlice"

export const MovieCard = ({movie, handleMovieView, handleAddToWatchlist}) => {
    const dispatch = useDispatch()

    const handleSelectedMovie = () => {
        dispatch(setSelectedMovie(movie))
    }
    return (
        <div className="flex flex-col border rounded bg-gray-50" onClick={handleSelectedMovie} handleAddToWatchlist={handleAddToWatchlist}>
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
    </div>
    )
}