import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { LOGO } from '../utils/constants';

const Header = ({ movies }) => {
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Filter movies based on search query
    const results = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
    console.log(`Searching for: ${searchQuery}`);
  };

  return (
    <div className='absolute fixed z-10 w-screen top-0 left-0 px-8 py-2 bg-gradient-to-b from-black to-transparent'>
      <div className="flex justify-between items-center">
        <img
          className='w-44'
          src={LOGO}
          alt="logo" 
        />
        {user ? (
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="flex items-center space-x-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="px-4 py-2 w-64 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600">
                Search
              </button>
            </form>
            <button onClick={logout} className="zi-10 font-bold text-red-700">
              Sign Out
            </button>
          </div>
        ) : (
          <button className="zi-10 font-bold text-white">
            Sign In
          </button>
        )}
      </div>
      {/* Display search results */}
      {searchResults.length > 0 && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchResults.map((movie, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-64 object-cover rounded-lg" />
              <h3 className="text-white text-lg font-semibold mt-2">{movie.title}</h3>
              <p className="text-gray-300 mt-1">{movie.release_date}</p>
              <p className="text-gray-400 mt-1">{movie.overview}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
