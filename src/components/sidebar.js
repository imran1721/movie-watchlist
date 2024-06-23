import { useDispatch, useSelector } from "react-redux";
import { homeIcon, optionsIcon, searchIcon, userIcon } from "../assets/icons";
import { search, setSelectedWatchlist } from "./watchlistSlice";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist);
  const searchQuery = useSelector((state) => state.searchQuery);
  const selectedWatchlist = useSelector((state) => state.selectedWatchlist);

  const handleSelectWatchlist = (listName) => {
    dispatch(setSelectedWatchlist(listName));
  };

  const handleHome = () => {
    dispatch(search(searchQuery));
    dispatch(setSelectedWatchlist(""));
  };

  return (
    <div className="h-screen pt-2 px-6 w-full">
      <div className="text-4xl font-bold text-primary mb-4">Watchlists</div>
      <div className="pb-4 border-b-2 border-gray-200">
        <form className="pb-4">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <img className="w-6 h-6 text-gray-500" src={searchIcon} alt="Search"/>
            </div>
            <input
              type="search"
              className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary/50 focus:border-primary/50 focus:outline-none"
              placeholder="Search"
              required
            />
          </div>
        </form>
        <button
          onClick={handleHome}
          className={`flex py-2 px-2 w-full rounded text-white ${!!selectedWatchlist ? "bg-gray-400" : "bg-primary"}`}
        >
          <div className="inline-flex align-middle">
            <img className="w-6 h-6 mr-2 text-gray-500" src={homeIcon} alt="Home"/>
            Home
          </div>
        </button>
      </div>
      <div className="flex flex-col items-start pl-2 pt-2">
        <div className="font-semibold text-primary">My Watchlist</div>
        <div className="h-60 w-full mt-2 overflow-y-auto flex flex-col items-start rounded-lg">
          {watchlist &&
            Object.keys(watchlist).map((el) => (
              <div
                key={el}
                className={`my-1 pl-2 py-2 h-full w-full flex border rounded-r-xl hover:bg-primary/80 hover:border-primary cursor-pointer text-black h-max ${el === selectedWatchlist ? "bg-primary/90" : "bg-white"}`}
                onClick={() => handleSelectWatchlist(el)}
              >
                <div className="flex items-center">
                  {" "}
                  <div className="!w-6 !h-8 mr-2 border text-xl text-white bg-black font-bold font-serif">
                    {el[0]}
                  </div>
                  {el}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-between fixed bottom-[30px] border rounded bottom-90 w-[15%] items-center">
        <div className="flex items-center">
          <img className="my-1 ml-1 mr-2 w-6 h-6" src={userIcon} alt="User"/>
          Guest
        </div>
        <div className="mr-2">
          <img className="my-1 ml-1 mr-2 w-6 h-6" src={optionsIcon} alt="Options"/>
        </div>
      </div>
    </div>
  );
};
