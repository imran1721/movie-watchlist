import "./App.css";
import { Header } from "./components/Header";
import { SearchBar } from "./components/searchBar";
import { Sidebar } from "./components/sidebar";
import { MovieList } from "./components/MovieList";
import { useSelector } from "react-redux";
import { MovieDetailModal } from "./components/AppModals/MovieDetailModal";
import { WatchlistSelectionModal } from "./components/AppModals/WatchlistSelectionModal";
import { EditWatchlistModal } from "./components/AppModals/EditWatchlistModal";

function App() {
  const selectedMovieDetail = useSelector((state) => state.selectedMovieDetail);
  const shouldAddToWatchlistModalOpen = useSelector(
    (state) => state.shouldAddToWatchlistModalOpen,
  );
  const shouldEditWatchlistModalOpen = useSelector(
    (state) => state.editWatchlist,
  );

  return (
    <div className="App">
      <div className="grid grid-cols-10">
        <div className="col-span-2 border-r-2 border-gray-200 self-start sticky top-0">
          <Sidebar />
        </div>
        <div className="col-span-8 mx-8 pt-4">
          <Header />
          <SearchBar />
          <MovieList />
        </div>
        {selectedMovieDetail && <MovieDetailModal />}
        {shouldAddToWatchlistModalOpen && <WatchlistSelectionModal />}
        {shouldEditWatchlistModalOpen && <EditWatchlistModal />}
      </div>
    </div>
  );
}

export default App;
