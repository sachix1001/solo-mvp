import React, { useEffect } from "react";
import "./App.css";
import { setAllMovies,  setAllExceptSelected} from "./redux/redux";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Movies from './Movies'
import data from './data';

function App() {
  // const selected = useSelector(state => state.selected);
  // const allExceptSelected = useSelector(state => state.allExceptSelected);
  const dispatch = useDispatch();
  
  dispatch(setAllMovies(data.Ghibli))
  dispatch(setAllExceptSelected(data.Ghibli))

  useEffect(() => {
    axios.get("/api/movies").then(res => {
      dispatch(setAllExceptSelected(res.data));
    });
  }, [dispatch]);

  // useEffect(()=>{
  //   console.log('allExceptSelected',allExceptSelected)
  // },[allExceptSelected])

  return (
    <div className="App">
      <Movies></Movies>
    </div>
  );
}

export default App;
