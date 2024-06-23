import { useDispatch, useSelector } from "react-redux";
import { checkIcon, editIcon, watchlistIcon } from "../assets/icons";
import { setWatchlistToEdit } from "./watchlistSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const selectedWatchlist = useSelector((state) => state.selectedWatchlist);
  const watchlist = useSelector((state) => state.watchlist);

  return (
    <>
      {selectedWatchlist ? (
        <div className="text-left py-4">
          <div className="flex text-4xl items-center font-semibold pb-4">
            {selectedWatchlist}
            <div>
              <img
                className="ml-4 w-8 h-8"
                src={editIcon}
                onClick={() => dispatch(setWatchlistToEdit(selectedWatchlist))}
              />
            </div>
          </div>
          <div className="text-xl font-medium pb-2">About this watchlist</div>
          <div>{watchlist[selectedWatchlist].description}</div>
        </div>
      ) : (
        <div className="border-2 border-primary rounded bg-gray-50">
          <div className="m-4 text-left">
            <div className="text-2xl">Welcome to Watchlists</div>
            <div className="mt-8">
              <p>
                Browse movies, add them to Watchlists and share them with
                friends.
              </p>
              <p>
                Just click the{" "}
                <img
                  className="align-middle inline"
                  width="25"
                  src={watchlistIcon}
                  alt="watchlist icon"
                />{" "}
                to add a movie, click the poster to see more details or{" "}
                <img
                  className="align-middle inline"
                  width="25"
                  src={checkIcon}
                  alt="watchlist icon"
                />{" "}
                to mark the movie as watched.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
