import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchMovies = createAsyncThunk("seach/movies", async (query) => {
  return axios.get(`http://www.omdbapi.com/?apikey=1de0ebd&s=${query}`);
});

const getMovieDetail = createAsyncThunk("get/movie", async (id) => {
  return axios.get(`http://www.omdbapi.com/?apikey=1de0ebd&i=${id}`);
});

export { fetchMovies, getMovieDetail };
