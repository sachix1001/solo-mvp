import React, { useEffect } from "react";
import "./App.css";
import { setAllMovies, selectMovie, allExceptSelected } from "./redux/redux";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import image from './images/1naushika.jpg'

function Movies() {
  const allMovies = useSelector(state => state.allMovies);
  const dispatch = useDispatch();


  return (
    <div className="App">
      {allMovies.map(movie=>(
          <img src={image} key='movie.id'/>
      ))}
    </div>
  );
}

export default Movies;
