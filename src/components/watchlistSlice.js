import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies, getMovieDetail } from "./asyncActions";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: {
    searchQuery: "Tom Cruise",
    searchResult: null,
    selectedMovie: null,
    selectedMovieDetail: null,
    shouldAddToWatchlistModalOpen: false,
    watchlist: null,
    selectedWatchlist: "",
    editWatchlist: "",
  },
  reducers: {
    search(state, action) {
      state.searchQuery = action.payload;
    },
    setSelectedMovieDetail(state, action) {
      state.selectedMovieDetail = action.payload;
    },
    setShouldAddToWatchlistModalOpen(state, action) {
      state.shouldAddToWatchlistModalOpen = action.payload;
    },
    setSelectedMovie(state, action) {
      state.selectedMovie = action.payload;
    },
    addToWatchlist(state, action) {
      state.watchlist = action.payload;
    },
    setSelectedWatchlist(state, action) {
      state.selectedWatchlist = action.payload;
    },
    setWatchlistToEdit(state, action) {
      state.editWatchlist = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.searchResult = action.payload;
      })
      .addCase(getMovieDetail.fulfilled, (state, action) => {
        state.selectedMovieDetail = action.payload;
      });
  },
});

export const {
  search,
  setSelectedMovieDetail,
  setShouldAddToWatchlistModalOpen,
  addToWatchlist,
  setSelectedMovie,
  setSelectedWatchlist,
  setWatchlistToEdit,
} = watchlistSlice.actions;
export default watchlistSlice.reducer;
