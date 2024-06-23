import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies, getMovieDetail } from "./asyncActions";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: {
    searchQuery: "",
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
      return {
        ...state,
        searchQuery: action.payload,
      };
    },
    setSelectedMovieDetail(state, action) {
      return {
        ...state,
        selectedMovieDetail: action.payload,
      };
    },
    setShouldAddToWatchlistModalOpen(state, action) {
      return {
        ...state,
        shouldAddToWatchlistModalOpen: action.payload,
      };
    },
    setSelectedMovie(state, action) {
      return {
        ...state,
        selectedMovie: action.payload,
      };
    },
    addToWatchlist(state, action) {
      return {
        ...state,
        watchlist: action.payload,
      };
    },
    setSelectedWatchlist(state, action) {
      return {
        ...state,
        selectedWatchlist: action.payload,
      };
    },
    setWatchlistToEdit(state, action) {
      return {
        ...state,
        editWatchlist: action.payload,
      };
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
