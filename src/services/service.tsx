import { IGenre } from '../interfaces/igenre';
import { IImages } from '../interfaces/iimages';
import { IMovie } from '../interfaces/imovie';
import { IMovieCredits } from '../interfaces/imoviecredits';
import { IMovieDetails } from '../interfaces/imoviedetails';
import { IPersonDetails } from '../interfaces/ipersondetails';
import { ISearch } from '../interfaces/isearch';
import { IVideos } from '../interfaces/ivideos';

const service = () => {
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '48f6d7e6d9ccc6de1a7a0b1be8be35f2';
  const IMAGE_URL = 'https://image.tmdb.org/t/p';
  const API_LANG = 'en-US';

  const fetchApi = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Could not fetch ${url}, received ${response.status} error`
      );
    }
    return response.json();
  };

  const getGenre = async (): Promise<IGenre[]> => {
    return fetchApi(
      `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=${API_LANG}`
    );
  };

  const getContentBySearch = async (query: string, page = 1) => {
    return fetchApi(
      `${API_URL}/search/movie?api_key=${API_KEY}&language=${API_LANG}&query=${query}&page=${page}&include_adult=false`
    );
  };

  const getMovieDetails = async (id: number): Promise<IMovieDetails> => {
    return fetchApi(
      `${API_URL}/movie/${id}?api_key=${API_KEY}&language=${API_LANG}`
    );
  };

  const getMovieImages = async (id: number): Promise<IImages> => {
    return fetchApi(`${API_URL}/movie/${id}/images?api_key=${API_KEY}`);
  };

  const getMovieRecommendations = async (
    id: number
  ): Promise<ISearch<IMovie>> => {
    return fetchApi(
      `${API_URL}/movie/${id}/recommendations?api_key=${API_KEY}&language=${API_LANG}`
    );
  };

  const getSimilarMovie = async (
    id: number,
    page = 1
  ): Promise<ISearch<IMovie>> => {
    return fetchApi(
      `${API_URL}/movie/${id}/similar?api_key=${API_KEY}&language=${API_LANG}&page=${page}`
    );
  };

  const getLatestMovie = async (): Promise<IMovie> => {
    return fetchApi(
      `${API_URL}/movie/latest?api_key=${API_KEY}&language=${API_LANG}&include_adult=false`
    );
  };

  const getNowPlayingMovies = async (page = 1): Promise<ISearch<IMovie>> => {
    return fetchApi(
      `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=${API_LANG}&page=${page}`
    );
  };

  const getPopularMovies = async (page = 1): Promise<ISearch<IMovie>> => {
    return fetchApi(
      `${API_URL}/movie/popular?api_key=${API_KEY}&language=${API_LANG}&page=${page}`
    );
  };

  const getTopRatedMovies = async (page = 1): Promise<ISearch<IMovie>> => {
    return fetchApi(
      `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=${API_LANG}&page=${page}`
    );
  };

  const getUpcomingMovies = async (page = 1): Promise<ISearch<IMovie>> => {
    return fetchApi(
      `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=${API_LANG}&page=${page}`
    );
  };

  const getMovieCredits = async (id: number): Promise<IMovieCredits> => {
    return fetchApi(
      `${API_URL}/movie/${id}/credits?api_key=${API_KEY}&language=${API_LANG}`
    );
  };

  const getMovieVideos = async (id: number): Promise<IVideos> => {
    return fetchApi(
      `${API_URL}/movie/${id}/videos?api_key=${API_KEY}&language=${API_LANG}`
    );
  };

  const getPersonDetails = async (id: number): Promise<IPersonDetails> => {
    return fetchApi(
      `${API_URL}/person/${id}?api_key=${API_KEY}&language=${API_LANG}&append_to_response=movie_credits`
    );
  };
};

export default fetchapi;
