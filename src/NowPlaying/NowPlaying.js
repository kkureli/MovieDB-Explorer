import React from "react";
import MoviesList from "../Components/MovieList/index";
import Header from "../Components/Header/index.js";

class NowPlaying extends React.Component {
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
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.searchMovie(this.state.searchForm);
  };
  imgClicked = (clickedMovie) => {
    this.setState({ clickedMovie: clickedMovie });
  };

  BASE_URL = "https://api.themoviedb.org/3";
  API_KEY = "542003918769df50083a13c415bbc602";

  componentDidMount = () => {
    fetch(`${this.BASE_URL}/movie/now_playing?api_key=${this.API_KEY}`)
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          movies: json.results,
        });
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
          <h1 class="  text-white mb-3 mt-2" style={{ textAlign: "center" }}>
            Now Showing!
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

export default NowPlaying;
