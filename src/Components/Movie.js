import React, { useState, useEffect } from "react";
import Navbar from "./Header/index";
import uuid from "react-uuid";

const baseURL = "http://image.tmdb.org/t/p/w1280/";

function Movie(props, match) {
  let BASE_URL = "https://api.themoviedb.org/3";
  let API_KEY = "542003918769df50083a13c415bbc602";
  let movieId = window.location.pathname.split("/").pop();

  const [cast, setCasts] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
      .then((resp) => resp.json())
      .then((json) => {
        setCasts(json.cast);
      });
    fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
      .then((resp) => resp.json())
      .then((json) => {
        setDetails(json);
      });
    let searchBar = document.querySelector(".search");
    searchBar.style.display = "none";
  }, []);

  return (
    <div
      style={{
        fontFamily: "Lora",
        backgroundColor: "#D9AFD9",
        backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
      }}
    >
      <Navbar></Navbar>

      <div
        style={{
          width: "100%",
          marginTop: "20px",
        }}
        class="container"
      >
        <div class="row">
          <div class="col-md-6">
            <img
              width="400px "
              src={baseURL + props.location.state.PosterPath}
              alt=""
            />
          </div>

          <div class="col-md-6">
            <h3
              style={{ color: "black", textAlign: "center", fontSize: "5rem" }}
            >
              {props.location.state.Title}
            </h3>
            <div class="container">
              <div class="row">
                <div class="col">
                  <div style={{ display: "flex", textAlign: "center" }}>
                    <p
                      className="border bg-light rounded p-2"
                      style={{ color: "black", width: "200px", height: "100%" }}
                    >
                      Release Date: {props.location.state.ReleaseDate}
                    </p>
                    <p
                      className="border bg-light rounded p-2  ml-2 mr-2 p-2"
                      style={{ color: "black", width: "29%", height: "100%" }}
                    >
                      Duration: {details && details.runtime} mins
                    </p>
                    <p
                      className="border bg-warning rounded p-2 "
                      style={{ color: "black", width: "22%", height: "100%" }}
                    >
                      Point: {props.location.state.VoteAverage}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p style={{ color: "black" }}>{props.location.state.Overview}</p>
            <p
              className="border bg-info rounded p-2  ml-2 mr-2 p-2 "
              style={{ color: "black", width: "100%", fontSize: "19px" }}
            >
              Tagline: {details && details.tagline}
            </p>
            <p
              className="border bg-success rounded p-2  ml-2 mr-2 p-2 "
              style={{ color: "black", width: "100%", fontSize: "19px" }}
            >
              Genres:{" "}
              {details &&
                details.genres.map((genre, index, array) => {
                  return (
                    <span key={uuid()}>
                      {genre.name}
                      <span>{array.length - 1 !== index ? ", " : null}</span>
                    </span>
                  );
                })}
            </p>

            <div class="row">
              <div class="col ">
                <p style={{ fontSize: "19px" }} class="mr-4">
                  Budget:{" "}
                  <span>
                    {" "}
                    {details.budget === 0 ? "Unfound" : details.budget} $
                  </span>{" "}
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p
                  className=" mt-3 mr-2 p-2 "
                  style={{ color: "black", width: "100%", fontSize: "19px" }}
                >
                  Productions:{" "}
                  <span>
                    {details && details.production_companies.length === 0
                      ? "Unfound"
                      : details &&
                        details.production_companies.map(
                          (genre, index, array) => {
                            return (
                              <span key={uuid()}>
                                {genre.name}
                                <span>
                                  {array.length - 1 !== index ? ", " : null}
                                </span>
                              </span>
                            );
                          }
                        )}
                  </span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button type="button" class="btn btn-primary ">
                  <a style={{ color: "white" }} href={details.homepage}>
                    HOMEPAGE
                  </a>
                </button>
                <button type="button" class="btn btn-warning ml-3 ">
                  <a
                    style={{ color: "white" }}
                    target="__blank"
                    href={"https://www.imdb.com/title/" + details.imdb_id}
                  >
                    IMDB PAGE
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <h4>Cast: </h4>
            {cast &&
              cast.slice(0, 10).map((cast, index, array) => {
                return (
                  <div
                    key={uuid()}
                    style={{ width: "250px", display: "inline-block" }}
                    class="card ml-2 mr-2 mt-2 mb-2 "
                  >
                    <img
                      class="card-img-top"
                      src={baseURL + cast.profile_path}
                      alt={cast.name}
                    />
                    <div class="card-body">
                      <h4 class="card-title">{cast.name}</h4>
                      <p class="card-text">{cast.character}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
