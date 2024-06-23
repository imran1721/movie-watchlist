import { useDispatch, useSelector } from "react-redux"
import { setSelectedMovieDetail } from "../watchlistSlice"
import { Modal } from "./Modal";
import { starIcon } from "../../assets/icons";

export const MovieDetailModal = () => {
    const dispatch = useDispatch()
    const selectedMovieDetail = useSelector((state) => state.selectedMovieDetail).data

    const handleClose = () => {
        dispatch(setSelectedMovieDetail(null))
    }
    console.log(selectedMovieDetail)

    return (
        <Modal
            title={`${selectedMovieDetail.Title} (${selectedMovieDetail.Year})`}
            handleClose={handleClose}
        >
            <div className="w-[40%] my-auto pr-4">
                <img className="w-full object-cover" src={selectedMovieDetail.Poster} alt="Movie Poster" />
            </div>
            <div className="w-[60%] text-left flex flex-col items-start">
                <div className="pb-1">
                    <p>
                        <span className="font-semibold">Plot</span>: {selectedMovieDetail.Plot || 'NA'}
                    </p>
                </div>
                <div className="pb-1">
                    <p>
                        <span className="font-semibold">Released</span>: {selectedMovieDetail.Year || 'NA'}
                    </p>
                </div>
                <div className="pb-1">
                    <p>
                        <span className="font-semibold">Runtime</span>: {selectedMovieDetail.Runtime || 'NA'}
                    </p>
                </div>
                <div className="pb-1">
                    <p>
                        <span className="font-semibold">Rated</span>: {selectedMovieDetail.Rated || 'NA'}
                    </p>
                </div>
                <div className="pb-1">
                    <p>
                        <span className="font-semibold">Genre</span>: {selectedMovieDetail.Genre || 'NA'}
                    </p>
                </div>
                <div className="pb-1">
                    <p>
                        <span className="font-semibold">Awards</span>: {selectedMovieDetail.Awards || 'NA'}
                    </p>
                </div>
                <div className="pb-1">
                    <p>
                        <span className="font-semibold">Actors</span>: {selectedMovieDetail.Actors || 'NA'}
                    </p>
                </div>
                <div className="pb-1">
                    <p>
                        <span className="font-semibold">Type</span>: {selectedMovieDetail.Type || 'NA'}
                    </p>
                </div>
                <div className="pb-1">
                    <p>
                        <span className="font-semibold">Language</span>: {selectedMovieDetail.Language || 'NA'}
                    </p>
                </div>
                <div className="pb-1">
                    <p>
                        <span className="font-semibold">Director</span>: {selectedMovieDetail.Director || 'NA'}
                    </p>
                </div>
                <div className="pb-1">
                    <p className="flex">
                        <span className="font-semibold">Rating</span>: <img className="mx-2 my-auto" src={starIcon} alt="Star Icon" />{selectedMovieDetail.imdbRating || 'NA'}&nbsp;
                        ({selectedMovieDetail.imdbVotes})
                    </p>
                </div>
            </div>
        </Modal>
    )
}