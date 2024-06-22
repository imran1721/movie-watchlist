import './App.css';
import { Header } from './components/Header';
import { SearchBar } from './components/searchBar';
import { Sidebar } from './components/sidebar';
import { MovieList } from './components/MovieList';
import { useSelector } from 'react-redux';
import { MovieDetailModal} from './components/AppModals/MovieDetailModal';
import { WatchlistSelectionModal } from './components/AppModals/WatchlistSelectionModal';

function App() {
  const selectedMovieDetail = useSelector((state) => state.selectedMovieDetail)
  const shouldAddToWatchlistModalOpen = useSelector((state) => state.shouldAddToWatchlistModalOpen)

  return (
    <div className="App">
      <div className='flex'>
        <div className='w-[20%] border-r-2 border-gray-200'>
          <Sidebar />
        </div>
        <div className='w-[80%] mx-16 py-16'>
          <Header />
          <SearchBar />
          <MovieList />
        </div>
        {selectedMovieDetail && <MovieDetailModal />}
        {shouldAddToWatchlistModalOpen && <WatchlistSelectionModal />}
      </div>
     
    </div>
  );
}

export default App;
