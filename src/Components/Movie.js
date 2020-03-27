import React, { useState, useEffect } from "react";
import Navbar from "./Header/index";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

const baseURL = "http://image.tmdb.org/t/p/w1280/";

function Movie(props, match) {
  // const [movie, setMovie] = useState({});

  // const BASE_URL = "https://api.themoviedb.org/3";
  // const API_KEY = "542003918769df50083a13c415bbc602";

  // const pathId = parseInt(window.location.pathname.split("/").pop());

  // useEffect(() => {
  //   // console.log("gel");
  //   // console.log(pathId);

  //   fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
  //     .then(resp => resp.json())
  //     .then(json => {
  //       json.results.map(movie => {
  //         if (movie.id === pathId) {
  //           console.log("movie", movie);

  //           return setMovie(movie);
  //         }
  //       });
  //     });
  // }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div
        style={{
          border: "1px solid blue",
          width: "80%",
          display: "flex",
          marginTop: "5%",
          marginLeft: "3%",
          backgroundColor: "gray",
          position: "absolute",
          boxShadow: "5px 10px"
        }}
      >
        <div>
          {" "}
          <img
            width="100% "
            src={baseURL + props.location.state.PosterPath}
            alt=""
          />
        </div>

        <div style={{ marginLeft: "10px" }}>
          <h3 style={{ color: "blue" }}>{props.location.state.Title}</h3>
          <p style={{ color: "white" }}>{props.location.state.Overview}</p>
          <p style={{ color: "white" }}>
            Release Date: {props.location.state.ReleaseDate}
          </p>
          <p style={{ color: "white" }}>
            Average Point: {props.location.state.VoteAverage}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
