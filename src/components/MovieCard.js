import { useDispatch, useSelector } from "react-redux"
import { checkGreenIcon, checkIcon, watchlistWhiteIcon } from "../assets/icons"
import { setSelectedMovie } from "./watchlistSlice"
import { EditWatchlistModal } from "./AppModals/EditWatchlistModal"
import { useState } from "react"

export const MovieCard = ({ movie, handleMovieView, handleAddToWatchlist }) => {
    const dispatch = useDispatch()
    const [shouldShowEditModal, setShouldShowEditModal] = useState(false)
    const selectedWatchlist = useSelector((state) => state.selectedWatchlist)

    const handleSelectedMovie = () => {
        dispatch(setSelectedMovie(movie))
    }

    const handleWatched = () => {

    }

    return (
        <>
        <div className="flex flex-col border rounded bg-gray-50" onClick={handleSelectedMovie}>
            <div className={`absolute w-16 h-16 z-10 ${selectedWatchlist && "hidden"}`} onClick={handleAddToWatchlist}>
                <img src={watchlistWhiteIcon} alt="Collection Icon" />
            </div>
            <div className={`absolute w-12 h-12 z-10 ${!selectedWatchlist && "hidden"}`} onClick={handleWatched}>
                {movie.isWatched ?<img className="bg-black/20 w-10" src={checkGreenIcon} alt="Check mark Icon" /> : <img className="bg-black/20 w-10" src={checkIcon} alt="Check mark Icon" />}
            </div>
            <div onClick={() => handleMovieView(movie.imdbID)}>
                <div>
                    <img className="h-[200px] w-full object-cover" src={movie.Poster} alt="Movie Poster" />
                </div>
                <div className="py-2 my-[auto]">
                    {movie.Title}
                    <br />
                    ({movie.Year})
                </div>
            </div>
        </div>
        {shouldShowEditModal && <EditWatchlistModal handleClose={setShouldShowEditModal}/>}
        </>
    )
}