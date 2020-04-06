import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

export default class MoviesList extends Component {
  render() {
    const baseURL = "http://image.tmdb.org/t/p/w1280/";

    const list = this.props.movies.map((movie) => (
      <Grid key={uuid()} item xs={4}>
        {}
        <Paper>
          <Card>
            <CardActionArea>
              <CardContent>
                <Link
                  to={{
                    pathname: `/movie/${movie.id}`,
                    state: {
                      Overview: movie.overview,
                      Title: movie.title,
                      PosterPath: movie.poster_path,
                      ReleaseDate: movie.release_date,
                      VoteAverage: movie.vote_average,
                    },
                  }}
                >
                  <img
                    onClick={this.props.onClick}
                    src={baseURL + movie.poster_path}
                    width="100%"
                    alt="Poster"
                  />
                </Link>

                <Typography gutterBottom variant="h5" component="h2">
                  {movie.original_title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Paper>
      </Grid>
    ));
    return (
      <div className="main">
        <Grid container spacing={3}>
          {list}
        </Grid>
      </div>
    );
  }
}
