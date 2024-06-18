import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCards.jsx';

const MovieList = ({ title, movies }) => {
  return (
    <div className='ml-10 py-4'>
      <h1 className='p-2 text-2xl text-white'>{title}</h1>
      <div className='flex p-2 overflow-x-auto scrollbar-hide'>
        <div className='flex'>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
