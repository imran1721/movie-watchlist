import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchlist,
  setShouldAddToWatchlistModalOpen,
} from "../watchlistSlice";
import { Modal } from "./Modal";
import { useState } from "react";
import { toast } from "react-toastify";

export const WatchlistSelectionModal = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist);
  const selectedMovie = useSelector((state) => state.selectedMovie);

  const optionsToShow =
    (watchlist &&
      Object.entries(watchlist)
        .filter(
          ([listName, items]) =>
            !items.movies.some((item) => item.imdbID === selectedMovie.imdbID),
        )
        .map(([listName]) => listName)) ||
    [];

  const [selectedList, setSelectedList] = useState(optionsToShow[0] || "");
  const [listName, setListName] = useState("");
  const [listDescription, setListDescription] = useState("");
  const [shouldShowError, setShouldShowError] = useState(false);

  const handleClose = () => {
    dispatch(setShouldAddToWatchlistModalOpen(false));
  };

  const handleAddToWatchlist = () => {
    if (listName) {
      if (watchlist && Object.keys(watchlist).includes(listName))
        setShouldShowError(true);
      else {
        const updatedWatchlist = {
          ...watchlist,
          [listName]: {
            description: [listDescription],
            movies: [{ ...selectedMovie, isWatched: false }],
          },
        };
        dispatch(addToWatchlist(updatedWatchlist));
        toast.success(`${selectedMovie.Title} is added to ${listName}`);
        handleClose();
      }
    } else {
      const selectedWatchlist = watchlist[selectedList];
      const moviesInTheSelectedList = selectedWatchlist.movies;
      const selectedListDescription = selectedWatchlist.description;
      const updatedMovies = [
        ...moviesInTheSelectedList,
        { ...selectedMovie, isWatched: false },
      ];
      const updatedWatchlist = {
        ...watchlist,
        [selectedList]: {
          description: selectedListDescription,
          movies: updatedMovies,
        },
      };
      dispatch(addToWatchlist(updatedWatchlist));
      toast.success(`${selectedMovie.Title} is added to ${selectedList}`);
      handleClose();
    }
  };
  return (
    <Modal title={`Add to Watchlist`} handleClose={handleClose}>
      <div className="w-full">
        <div className="flex pb-4">
          <div className="w-full">
            {watchlist && optionsToShow.length > 0 && (
              <div className="w-full flex pb-4">
                <label className="text-xl my-auto mr-4">
                  Add to existing list:
                </label>
                <select
                  className="w-1/2 p-2 bg-gray-50 border rounded border-primary/20 focus:border-primary/80 focus:outline-none"
                  onChange={(e) => setSelectedList(e.target.value)}
                >
                  {optionsToShow.map((key) => (
                    <option value={key}>{key}</option>
                  ))}
                </select>
              </div>
            )}
            <div className="w-full flex pt-4">
              <label className="text-xl my-auto mr-4">
                Create New List:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input
                onChange={(e) => {
                  setShouldShowError(false);
                  setListName(e.target.value);
                }}
                className="w-1/2 p-2 border rounded border-primary/20 focus:border-primary/80 focus:outline-none"
                type="text"
                placeholder="List Name"
              />
            </div>
            <div className="w-full flex pt-4 pb-4">
              <label className="text-xl my-auto mr-4">
                List Description:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input
                onChange={(e) => {
                  setListDescription(e.target.value);
                }}
                className="w-1/2 p-2 border rounded border-primary/20 focus:border-primary/80 focus:outline-none"
                type="text"
                placeholder="List Description"
              />
            </div>
            {shouldShowError && (
              <p className="text-red-600">
                List with same name already exists.
              </p>
            )}
          </div>
        </div>

        <div className="w-full flex justify-end">
          <button
            className="bg-red-400 py-2 px-8 mr-4 rounded"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="bg-green-400 py-2 px-8 rounded"
            onClick={handleAddToWatchlist}
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </Modal>
  );
};
