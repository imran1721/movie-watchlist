import { useState } from "react";
import { useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { SearchBar } from "../../components/searchBar";
import { Sidebar } from "../../components/sidebar";
import { MovieList } from "../../components/MovieList";
import { MovieDetailModal } from "../../components/AppModals/MovieDetailModal";
import { WatchlistSelectionModal } from "../../components/AppModals/WatchlistSelectionModal";
import { EditWatchlistModal } from "../../components/AppModals/EditWatchlistModal";
import { closeWhiteIcon } from "../../assets/icons";
import LoadingSpinner from "../../assets/gif/spinner.gif";

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const selectedMovieDetail = useSelector((state) => state.selectedMovieDetail);
  const shouldShowSpinner = useSelector((state) => state.shouldShowSpinner);
  const shouldAddToWatchlistModalOpen = useSelector(
    (state) => state.shouldAddToWatchlistModalOpen,
  );
  const shouldEditWatchlistModalOpen = useSelector(
    (state) => state.editWatchlist,
  );

  return (
    <div className="App flex h-screen">
      {/* Sidebar */}
      {shouldShowSpinner && (
        <div className="absolute z-50 bg-black/10 h-full w-full">
          <img
            className="m-auto !mt-48 w-28"
            src={LoadingSpinner}
            alt="Spinner"
          />
        </div>
      )}
      <div
        className={`fixed inset-0 bg-gray-600 bg-opacity-50 z-20 transition-opacity lg:hidden ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      <div
        className={`h-screen overflow-y-none fixed inset-y-0 left-0 transform bg-white transition-transform lg:relative lg:translate-x-0 lg:w-1/5 border-r-2 border-gray-200 z-30 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-1/5 overflow-y-scroll">
        <div className="mx-8 pt-4">
          <Header />
          <SearchBar />
          <MovieList />
        </div>
      </div>

      {/* Menu Toggle Button */}
      <button
        className="lg:hidden fixed bottom-4 right-4 bg-primary text-white p-3 rounded-full z-40 w-14 h-14"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <img src={closeWhiteIcon} alt="Close Icon" /> : <>☰</>}
      </button>
      {selectedMovieDetail && <MovieDetailModal />}
      {shouldAddToWatchlistModalOpen && <WatchlistSelectionModal />}
      {shouldEditWatchlistModalOpen && <EditWatchlistModal />}
    </div>
  );
}

export default Home;
