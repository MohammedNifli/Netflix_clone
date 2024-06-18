import React, { useEffect, useState } from 'react';
import Header from './Header';
import { API_options } from '../utils/constants';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  const [mainMovie, setMainMovie] = useState(null);
  const [movies, setMovies] = useState(null);
  const [popularMovies, setPopularMovies] = useState(null);
  const [topRatedMovies, setTopRatedMovies] = useState(null);
  const [upComingMovies, setUpComingMovies] = useState(null);

  // Function to fetch now playing movies from the API
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_options
      );
      const json = await data.json();
      const movie = json.results[0];
      setMainMovie(movie); // Set the main movie
      setMovies(json.results); // Set the list of movies
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  // Fetch popular movies
  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_options
      );
      const json = await data.json();
      setPopularMovies(json.results);
    } catch (error) {
      console.error("Failed to fetch popular movies:", error);
    }
  };

  // Fetch top rated movies
  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_options
      );
      const json = await data.json();
      setTopRatedMovies(json.results);
    } catch (error) {
      console.error("Failed to fetch top rated movies:", error);
    }
  };

  // Fetch upcoming movies
  const getUpComingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_options
      );
      const json = await data.json();
      setUpComingMovies(json.results);
    } catch (error) {
      console.error("Failed to fetch upcoming movies:", error);
    }
  };

  // useEffect to run getNowPlayingMovies when component mounts
  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpComingMovies();
  }, []);

  return (
    <>
      <Header movies={movies} />
      {mainMovie && <MainContainer movie={mainMovie} />}
      {movies && (
        <SecondaryContainer
          movies={movies}
          popularMovies={popularMovies}
          topRatedMovies={topRatedMovies}
          upComingMovies={upComingMovies}
        />
      )}
    </>
  );
};

export default Browse;
