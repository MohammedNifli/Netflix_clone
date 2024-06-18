import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
  return (
    <div className="w-44 mr-4 mt-24  ">
      <img alt="movie card" className="hover" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCards;