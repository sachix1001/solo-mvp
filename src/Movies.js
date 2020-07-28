import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import frame from "./images/どんぐり.png";
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
    console.log("allMovies", allMovies);
    console.log("selected", selected);
    console.log("allExceptSelected", allExceptSelected);
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
    // recommender.train(filtered);

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
  }, [selected]);

  return (
    <div className="App">
      <div className="container">
        {selected ? (
          <div className="favorite-movie-card memox">
            {/* <img src={frame} className='frame' alt='frame'/> */}
            <h3 className="ranking" id='select'>
              Select Your Favorite Movie
            </h3>
            <img
              className="movie-img"
              id="favorite"
              src={image[selected.img]}
            />
          </div>
        ) : null}
        <div className="place-holder">
        </div>
        <div className="movie-card">
        </div>
        {allExceptSelected.map((movie, i) => {
          return (
            <div className="movie-card">
              <div className="ranking">{i + 1}</div>
              <img
                className="movie-img"
                src={image[movie.img]}
                key={movie.id}
                onClick={e => movieSelected(movie)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
