import React from 'react'
import MovieList from './MovieList'

const SecondaryContainer = ({movies, popularMovies, topRatedMovies, upComingMovies}) => {

  return (
    <div className='bg-black'>
        <div className='relative -mt-40 '>
        <MovieList title={"Now Playing"} movies={movies}/>
        <MovieList title={"Popular"} movies={popularMovies}/>
        <MovieList title={"Top Rated Movies"} movies={topRatedMovies}/>
        <MovieList title={"Upcoming"} movies={upComingMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer