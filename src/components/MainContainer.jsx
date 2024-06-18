import React from 'react';
import VideoTitle from './VideoTitle.jsx';
import VideoBackground from './VideoBackground.jsx';

const MainContainer = ({movie}) => {
  return (
    <>
     <div >
      <VideoTitle movie={movie}/>
      <VideoBackground movie={movie} />
    </div>
    </>
    
  )
}

export default MainContainer