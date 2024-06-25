import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const { REACT_APP_API_BASE_URL, REACT_APP_API_KEY } = process.env;

const fetchMovies = createAsyncThunk("seach/movies", async (query) => {
  return axios.get(
    `${REACT_APP_API_BASE_URL}?apikey=${REACT_APP_API_KEY}&s=${query}`,
  );
});

const getMovieDetail = createAsyncThunk("get/movie", async (id) => {
  return axios.get(
    `${REACT_APP_API_BASE_URL}?apikey=${REACT_APP_API_KEY}&i=${id}`,
  );
});

export { fetchMovies, getMovieDetail };
