import { useDispatch, useSelector } from "react-redux"
import { setSelectedMovieDetail } from "../watchlistSlice"
import { Modal } from "./Modal";

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
            <div className="flex justify-between pt-8">
                <div className="w-[40%] pr-4">
                    <img className="w-full object-cover" src={selectedMovieDetail.Poster} alt="Movie Poster" />
                </div>
                <div className="w-[60%] flex items-center">
                    <p>
                        <span className="font-semibold">Released</span>: <span>{selectedMovieDetail.Year || 'NA'}</span><br />
                        <span className="font-semibold">Runtime</span>: <span>{selectedMovieDetail.Runtime || 'NA'}</span><br />
                        <span className="font-semibold">Genre</span>: <span>{selectedMovieDetail.Genre || 'NA'}</span><br />
                        <span className="font-semibold">Actors</span>: <span>{selectedMovieDetail.Actors || 'NA'}</span><br />
                        <span className="font-semibold">Type</span>: <span>{selectedMovieDetail.Type || 'NA'}</span><br />
                    </p>
                </div>
            </div>
        </Modal>
    )
}