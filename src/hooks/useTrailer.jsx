import { useEffect, useState } from 'react';
import { API_options } from '../utils/constants';

const useTrailer = (id) => {
  const [trailerId, setTrailerId] = useState(null);

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_options
      );
      const json = await data.json();
      const filterData = json.results.filter((item) => item.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      console.log(trailer);
      setTrailerId(trailer ? trailer.key : null);
    } catch (error) {
      console.error("Failed to fetch movie videos:", error);
    }
  };

  useEffect(() => {
    if (id) {
      getMovieVideos();
    }
  }, [id]);

  return trailerId;
};

export default useTrailer;
