import React, { useEffect } from "react";
import "./App.css";
import { setAllMovies, selectMovie, allExceptSelected } from "./redux/redux";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function App() {
  const allMovies = useSelector(state => state.allMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/api/movies").then(res => {
      dispatch(setAllMovies(res.data));
    });
  }, [dispatch]);

  useEffect(()=>{
    console.log(allMovies)
  },[allMovies])

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
