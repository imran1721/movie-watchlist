import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchlist,
  setSelectedWatchlist,
  setWatchlistToEdit,
} from "../watchlistSlice";

export const EditWatchlistModal = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist);
  const watchlistToEdit = useSelector((state) => state.editWatchlist);
  const selectedWatchList = watchlist[watchlistToEdit];

  const [listName, setListName] = useState(watchlistToEdit);
  const [listDescription, setListDescription] = useState(
    selectedWatchList?.description,
  );
  const [shouldShowError, setShouldShowError] = useState(false);

  const handleClose = () => {
    dispatch(setWatchlistToEdit(""));
  };

  const handleSave = () => {
    let updatedWatchlist = { ...watchlist };

    updatedWatchlist[listName] = {
      ...watchlist[watchlistToEdit],
      description: [listDescription],
    };
    if (listName !== watchlistToEdit) delete updatedWatchlist[watchlistToEdit];
    dispatch(setSelectedWatchlist(listName));
    dispatch(addToWatchlist(updatedWatchlist));

    handleClose();
  };

  return (
    <Modal title={"Rename watchlist"} handleClose={handleClose}>
      <div className="w-full">
        <div className="flex pb-4">
          <div className="w-full">
            <div className="w-full flex pt-4">
              <label className="text-xl my-auto mr-4">
                Create New List:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input
                value={listName}
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
                value={listDescription}
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
            onClick={handleSave}
          >
            Update
          </button>
        </div>
      </div>
    </Modal>
  );
};
