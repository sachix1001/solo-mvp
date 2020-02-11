import React, { useEffect } from "react";
import "./App.css";
import { setAllMovies, setAllExceptSelected } from "./redux/redux";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Movies from "./Movies";
import data from "./data";
import totoro from "./images/53983810.png";

function App() {
  // const selected = useSelector(state => state.selected);
  // const allExceptSelected = useSelector(state => state.allExceptSelected);
  const dispatch = useDispatch();

  dispatch(setAllMovies(data.Ghibli));
  dispatch(setAllExceptSelected(data.Ghibli));

  useEffect(() => {
    axios.get("/api/movies").then(res => {
      dispatch(setAllMovies(res.data));
      dispatch(setAllExceptSelected(res.data));
    });
  }, [dispatch]);

  // useEffect(()=>{
  //   console.log('allExceptSelected',allExceptSelected)
  // },[allExceptSelected])

  return (
    <div className="App">
      <nav>
        <h1 id="title">Ghibli Movie Recommendation</h1>
        
        <img id="totoro" src={totoro} alt="totoro" />
      </nav>
      <div className='wrapper'>
        <Movies></Movies>
      </div>
    </div>
  );
}

export default App;
