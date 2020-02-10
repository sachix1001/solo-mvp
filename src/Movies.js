import React, { useEffect } from "react";
import "./App.css";
import { setAllMovies, selectMovie, allExceptSelected } from "./redux/redux";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
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

function Movies() {
  const allMovies = useSelector(state => state.allMovies);
  const dispatch = useDispatch();
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

  return (
    <div className="App">
      {allMovies.map(movie => {
        return <img src={image[movie.img]} key="movie.id" />;
      })}
    </div>
  );
}

export default Movies;
