import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { SearchBar } from './components/searchBar';
import { Sidebar } from './components/sidebar';
import { MovieList } from './components/MovieList';

function App() {
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
      </div>
     
    </div>
  );
}

export default App;
