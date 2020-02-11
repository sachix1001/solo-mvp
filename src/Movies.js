import React, { useEffect } from "react";
import "./App.css";
// import { setAllMovies, selectMovie, allExceptSelected } from "./redux/redux";
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

  const filtered = allMovies.map(movie => {
    return { id: movie.id, content: movie.content };
  });
  recommender.train(filtered);

  //get top 10 similar items to document 1000002
  const similarDocuments = recommender.getSimilarDocuments("1", 0, 10);

  console.log("similarDocuments", similarDocuments);

  function movieSelected(movie) {
    dispatch(selectMovie(movie));
    const exceptSelected = allMovies.filter(elem => elem.id !== movie.id);
    dispatch(setAllExceptSelected(exceptSelected));
  }

    useEffect(()=>{
    
  },[selected])

  //   useEffect(()=>{
  //   console.log('allExceptSelected',allExceptSelected)
  // },[allExceptSelected])

  return (
    <div className="App">
      {selected ? (
        <div>
          <img src={image[selected.img]} />
        </div>
      ) : null}
      {allExceptSelected.map(movie => {
        return (
          <img
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
