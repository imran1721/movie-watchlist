import { useDispatch } from "react-redux"
import { setShouldAddToWatchlistModalOpen } from "../watchlistSlice"
import { Modal } from "./Modal"

export const WatchlistSelectionModal = () => {
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(setShouldAddToWatchlistModalOpen(false))
    }
    return (
        <Modal title={`Add to Watchlist`} handleClose={handleClose}>
            <div className="w-full">
                <div className="flex pb-4">
                    <div className="w-full">
                        <div className="w-full flex pb-4">
                            <label className="text-xl mr-4">Add to existing list:</label>
                            <select className="w-1/2 p-2 bg-gray-50 border rounded border-primary/20 focus:border-primary/80 focus:outline-none">
                                <option value="1">List 1</option>
                                <option value="1">List 1</option>
                            </select>
                        </div>
                        <div className="w-full flex pb-4">
                            <label className="text-xl my-auto mr-4">Create New List:</label>
                            <input className="w-1/2 p-2 border rounded border-primary/20 focus:border-primary/80 focus:outline-none" type="text" placeholder="List Name" />
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-end">
                    <button className="bg-red-400 py-2 px-8 mr-4 rounded" onClick={handleClose}>
                        Cancel
                    </button>
                    <button className="bg-green-400 py-2 px-8 rounded">
                        Add to Watchlist
                    </button>
                </div>
            </div>
        </Modal>
    )
}