import React, { Component } from 'react';

import Container from '../../components/Container/Container';
import Movie from './Movie/Movie';
import movies$ from '../../movies';
import style from './Movies.module.css';

class Movies extends Component {
  state = {
    movies: []
  }

  componentWillMount () {
    this.setState({movies: movies$});
  }

  calculatePercentage = (likes, dislikes) =>  `${Math.round(likes / (likes + dislikes) * 100)}%`;

  render () {
    const movies = this.state.movies.map(movie => (
      <Movie
        key={movie.id}
        title={movie.title}
        category={movie.category}
        likes={movie.likes}
        dislikes={movie.dislikes}
        percentage={this.calculatePercentage(movie.likes, movie.dislikes)} />
    ));

    return (
      <Container>
        <div className={style.Movies}>
          {movies}
        </div>
      </Container>
    );
  }
}

export default Movies;
