const VideoTitle = ({ movie }) => {
    const { original_title, overview } = movie;
    return (
      <div className="absolute py-64 z-10  bg-gradient-to-r from-lighblack ">
        <div className="w-full max-w-xl px-8 text-center">
          <h1 className="font-bold text-3xl text-white">{original_title}</h1>
          <p className="mt-2 text-white">{overview}</p>
          <div className="mt-3">
            <button className="px-4 py-2 rounded-md m-2 text-black font-bold bg-white hover:bg-opacity-60">
              ▷ Play
            </button>
            <button className="px-4 py-2 rounded-md m-2 text-white font-bold bg-slate-500 hover:bg-opacity-60">
              🛈 More Info
            </button>
          </div>
        </div>
      </div>
    );
  };
  

export default VideoTitle