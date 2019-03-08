import React, { Component } from 'react';

import Movie from './Movie/Movie';
import movies$ from '../../movies';
import styles from './Movies.module.css';

class Movies extends Component {
  state = {
    movies: [],
    categories: [],
    categorySelected: 'All'
  }

  componentWillMount () {
    this.setState({movies: movies$});
  }

  componentDidMount () {
    const categories = [...new Set(this.state.movies.map(movie => movie.category))];
    categories.push('All');
    this.setState({categories: categories.sort()});
  }

  calculatePercentage = (likes, dislikes) =>  `${Math.round(likes / (likes + dislikes) * 100)}%`;

  getFilterValueHandler = () => {
    const selector = document.getElementById('filter');
    const value = selector[selector.selectedIndex].value;
    this.setState({categorySelected: value});
  }

  render () {
    let movies = this.state.movies.map(movie => {
      const color = `#ff00${Math.floor(Math.random() * 9)}0`
      if (this.state.categorySelected === 'All' || this.state.categorySelected === movie.category) {
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            category={movie.category}
            likes={movie.likes}
            dislikes={movie.dislikes}
            percentage={this.calculatePercentage(movie.likes, movie.dislikes)}
            color={color} />
        );
      } else {
        return null;
      }
    });
    if (movies == null) movies = <p>No movies were found.</p>

    const options = this.state.categories.map(category => (
      <option
        key={category}
        value={category}>{category}</option>
    ));

    return (
      <div className={styles.Wrapper}>
        <select id='filter' onChange={this.getFilterValueHandler}>
          {options}
        </select>

        <div className={styles.Movies}>
          {movies}
        </div>
      </div>
    );
  }
}

export default Movies;
