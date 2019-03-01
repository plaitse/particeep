import React, { Component } from 'react';

import Container from '../../components/Container/Container';
import Movie from '../../components/Movie/Movie';
import movies$ from '../../movies';
import style from './Movies.module.css';

class Movies extends Component {
  state = {
    movies: []
  }

  componentWillMount () {
    this.setState({movies: movies$});
  }

  render () {
    const movies = this.state.movies.map(movie => (
      <Movie
        key={movie.id}
        title={movie.title}
        category={movie.category}
        likes={movie.likes}
        dislikes={movie.dislikes} />
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
