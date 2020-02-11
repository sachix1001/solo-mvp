import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
import {
  naushika1,
  rapyuta2,
  Hotaru3,
  totoro4,
  Kiki5,
  omoide6,
  rosso7,
  ponpoko8,
  Mimiwosumaseba9,
  mononoke10,
  yamada11,
  spirited12,
  NekonoOngaeshi13,
  howl14,
  gedo15,
  ponyo16,
  arrietty17,
  Kokuriko18,
  kaguya19,
  kazetachinu20,
  marnie21
} from "./images/index";
import { selectMovie, setAllExceptSelected } from "./redux/redux";
import ContentBasedRecommender from "content-based-recommender";

function Movies() {
  const allMovies = useSelector(state => state.allMovies);
  const selected = useSelector(state => state.selected);
  const allExceptSelected = useSelector(state => state.allExceptSelected);
  // const dispatch = useDispatch();
  const image = {
    naushika1,
    rapyuta2,
    Hotaru3,
    totoro4,
    Kiki5,
    omoide6,
    rosso7,
    ponpoko8,
    Mimiwosumaseba9,
    mononoke10,
    yamada11,
    spirited12,
    NekonoOngaeshi13,
    howl14,
    gedo15,
    ponyo16,
    arrietty17,
    Kokuriko18,
    kaguya19,
    kazetachinu20,
    marnie21
  };
  const dispatch = useDispatch();
  const recommender = new ContentBasedRecommender({
    minScore: 0,
    maxSimilarDocuments: 100
  });

  function movieSelected(movie) {
    dispatch(selectMovie(movie));
    console.log('allMovies',allMovies)
    console.log('selected',selected)
    console.log('allExceptSelected',allExceptSelected)
    const exceptSelected = allMovies.filter(elem => elem.id !== movie.id);
    dispatch(setAllExceptSelected(exceptSelected));
  }

  // create recommendation
  useEffect(() => {
    // filter not needed info
    const filtered = allMovies.map(movie => {
      return { id: movie.id, content: movie.content };
    });
    // train
    recommender.train(filtered);

    //get top 10 similar items to document 1000002
    const similarDocuments = recommender.getSimilarDocuments(
      selected.id,
      0,
      100
    );
    // order exceptedList
    if (Object.keys(selected).length !== 0) {
      const orderedMovies = [];
      similarDocuments.forEach(ranking => {
        const pick = allExceptSelected.find(movie => movie.id === ranking.id);
        orderedMovies.push(pick);
      });
      console.log("orderedMovies", orderedMovies);
      dispatch(setAllExceptSelected(orderedMovies));
    }
    // setOrder(orderedMovies)
  }, [selected]);

  // useEffect(() => {
  //   console.log("selected", selected);
  // }, [selected]);

  return (
    <div className="App">
      <h2 id='title'>Select Your Favorite Ghibli Movie</h2>
      {selected ? (
        <div>
          <img className='movieImg' src={image[selected.img]} />
        </div>
      ) : null}
      {allExceptSelected.map(movie => {
        return (
          <img className='movieImg'
            src={image[movie.img]}
            key={movie.id}
            onClick={e => movieSelected(movie)}
          />
        );
      })}
    </div>
  );
}

export default Movies;
