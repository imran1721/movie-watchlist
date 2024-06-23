import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "./asyncActions";
import { setShouldAddToWatchlistModalOpen } from "./watchlistSlice";
import { MovieCard } from "./MovieCard";
import NoMovieImg from "../assets/images/noMovie.jpg";

export const MovieList = () => {
  const dispatch = useDispatch();
  const searchResult = useSelector((state) => state.searchResult);
  const selectedWatchList = useSelector((state) => state.selectedWatchlist);
  const watchlist = useSelector((state) => state.watchlist);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (selectedWatchList) {
      setMovies(watchlist[selectedWatchList].movies);
    } else {
      if (searchResult?.data) setMovies(searchResult.data.Search);
    }
  }, [searchResult, selectedWatchList, watchlist]);

  const handleMovieView = (movieId) => {
    dispatch(getMovieDetail(movieId));
  };

  const handleAddToWatchlist = () => {
    dispatch(setShouldAddToWatchlistModalOpen(true));
  };

  if (!movies)
    return (
      <div className="mt-20 flex justify-center mx-auto">
        <img className="w-[60%]" src={NoMovieImg} alt="No Movie Found" />
      </div>
    );

  return (
    <div className="mt-8 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
      {movies &&
        movies.map((movie) => {
          return (
            <MovieCard
              movie={movie}
              handleMovieView={handleMovieView}
              handleAddToWatchlist={handleAddToWatchlist}
            />
          );
        })}
    </div>
  );
};
