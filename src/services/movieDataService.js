import axios from "axios";
import { HttpRequest } from "../http/httpRequest";

const TMDB_BASE_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "a56351de2479e229b69d2aa4d17d8f38";

export const movieService = axios.create({
  baseURL: TMDB_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

export const movieDataService = new HttpRequest(movieService);
