import React from "react";
// import movies from './data';
import MoviesList from "../Components/MovieList/index";
import Header from "../Components/Header/index.js";

class ComingSoon extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchForm: "",
      clickedMovie: "",
    };
  }

  onChange = (e) => {
    this.setState({ searchForm: e.target.value });
    console.log(this.state);
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.searchMovie(this.state.searchForm);
  };
  imgClicked = (clickedMovie) => {
    this.setState({ clickedMovie: clickedMovie });
    console.log(this.state);
  };

  BASE_URL = "https://api.themoviedb.org/3";
  API_KEY = "542003918769df50083a13c415bbc602";

  componentDidMount = () => {
    fetch(`${this.BASE_URL}/movie/upcoming?api_key=${this.API_KEY}`)
      .then((resp) => resp.json())
      .then((json) => {
        this.setState(
          {
            movies: json.results,
          },
          () => console.log(this.state)
        );
      });
  };

  searchMovie = (movieName) => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=542003918769df50083a13c415bbc602&language=en-US&query=" +
        movieName +
        "&page=1&include_adult=false"
    )
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({ movies: json.results });
      });
  };

  render() {
    return (
      <div>
        <Header onSubmit={this.onSubmit} onChange={this.onChange} />
        <div class="container">
          <h1
            class=" border bg-info rounded mt-2"
            style={{ textAlign: "center" }}
          >
            Soon...
          </h1>
        </div>
        <MoviesList
          routerProps={this.props.routeProps}
          imgClicked={this.imgClicked}
          clickedMovie={this.state.clickedMovie}
          movies={this.state.movies}
        />
      </div>
    );
  }
}

export default ComingSoon;
