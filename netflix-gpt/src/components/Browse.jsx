import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice.js";

const Browse = () => {
  const dispatch = useDispatch();

  const getMoviesDetails = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing", API_OPTIONS);

    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(() => {
    getMoviesDetails()
  },[])

  return (
    <div>
     <Header/>

    </div>
  );
};

export default Browse;
