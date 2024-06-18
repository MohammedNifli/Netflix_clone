import React from 'react';
import useTrailer from '../hooks/useTrailer';
import VideoTitle from './VideoTitle.jsx'; // Assuming VideoTitle is the component that contains the title, overview, and buttons

const VideoBackground = ({ movie }) => {
  const { id } = movie;
  const trailerId = useTrailer(id);

  return (
    <div className="relative w-screen h-screen">
      <VideoTitle movie={movie} />
      {trailerId ? (
        <iframe
          className="inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${trailerId}`}

          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ) : (
        <div className="flex justify-center items-center w-full h-full text-white bg-black">
          No trailer available
        </div>
      )}
    </div>
  );
};

export default VideoBackground;

