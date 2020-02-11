import React, { useEffect } from "react";
import "./App.css";
import { setAllMovies,  setAllExceptSelected} from "./redux/redux";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Movies from './Movies'
import data from './data';
import totoro from './images/totoro_bottom.png'

function App() {
  // const selected = useSelector(state => state.selected);
  // const allExceptSelected = useSelector(state => state.allExceptSelected);
  const dispatch = useDispatch();
  
  dispatch(setAllMovies(data.Ghibli))
  dispatch(setAllExceptSelected(data.Ghibli))
  

  useEffect(() => {
    axios.get("/api/movies").then(res => {
      dispatch(setAllMovies(res.data));
      dispatch(setAllExceptSelected(res.data))
    });
  }, [dispatch]);

  // useEffect(()=>{
  //   console.log('allExceptSelected',allExceptSelected)
  // },[allExceptSelected])

  return (
    <div className="App">
      <Movies></Movies>
      {/* <img src={totoro} alt='totoro'/> */}
    </div>
  );
}

export default App;
