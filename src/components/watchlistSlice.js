import { createSlice } from '@reduxjs/toolkit'
import { fetchMovies, getMovieDetail } from './asyncActions';

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: {
    searchQuery: "",
    searchResult: null,
    selectedMovieId: "",
    selectedMovieDetail: null,
    shouldAddToWatchlistModalOpen: false,
    watchlist: {
      watchlistName: [
        {
          
        }
      ]
    }
  },
  reducers: {
    search(state, action){
       return {
        ...state,
        searchQuery: action.payload
       }
    },
    setSelectedMovieDetail(state, action){
      return {
        ...state,
        selectedMovieDetail: action.payload
      }
    },
    setShouldAddToWatchlistModalOpen(state, action){
      return {
        ...state,
        shouldAddToWatchlistModalOpen: action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchMovies.fulfilled, (state, action) => {
            state.searchResult = action.payload
        })
        .addCase(getMovieDetail.fulfilled, (state, action) => {
          state.selectedMovieDetail = action.payload
      })
  }
})

export const { search, setSelectedMovieDetail, setShouldAddToWatchlistModalOpen } = watchlistSlice.actions
export default watchlistSlice.reducer