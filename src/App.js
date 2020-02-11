import React, { useEffect } from "react";
import "./App.css";
import { setAllMovies } from "./redux/redux";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Movies from './Movies'

function App() {
  const allMovies = useSelector(state => state.allMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/api/movies").then(res => {
      dispatch(setAllMovies(res.data));
    });
  }, [dispatch]);

  useEffect(()=>{
    console.log('allMovies',allMovies)
  },[allMovies])

  return (
    <div className="App">
      <Movies></Movies>
    </div>
  );
}

export default App;
