import React, { Component } from 'react';

import Likes from '../../../components/Opinion/Likes/Likes';
import Meter from '../../../components/Opinion/Meter/Meter';
import styles from './Movie.module.css';

class Movie extends Component {
  state = {
    likes: this.props.likes,
    dislikes: this.props.dislikes,
    liked: false,
    disliked: false,
    percentage: this.props.percentage,
    removed: false
  }

  likeHandler = () => {
    if (this.state.liked) {
      const oldCount = this.state.likes;
      const updatedCount = oldCount - 1;
      let updatedLikes = {
        ...this.state.likes
      };
      updatedLikes = updatedCount;
      this.setState({likes: updatedLikes, liked: !this.state.liked});
      this.updatePercentageHandler(updatedLikes, this.state.dislikes);
    } else {
      // If already disliked remove dislike
      if (this.state.disliked) this.dislikeHandler();
      const oldCount = this.state.likes;
      const updatedCount = oldCount + 1;
      let updatedLikes = {
        ...this.state.likes
      };
      updatedLikes = updatedCount;
      this.setState({likes: updatedLikes, liked: !this.state.liked});
      this.updatePercentageHandler(updatedLikes, this.state.dislikes);
    }
  }

  dislikeHandler = () => {
    if (this.state.disliked) {
      const oldCount = this.state.dislikes;
      const updatedCount = oldCount - 1;
      let updatedDislikes = {
        ...this.state.dislikes
      };
      updatedDislikes = updatedCount;
      this.setState({dislikes: updatedDislikes, disliked: !this.state.disliked});
      this.updatePercentageHandler(this.state.likes, updatedDislikes);
    } else {
      // If already liked remove like
      if (this.state.liked) this.likeHandler();
      const oldCount = this.state.dislikes;
      const updatedCount = oldCount + 1;
      let updatedDislikes = {
        ...this.state.dislikes
      };
      updatedDislikes = updatedCount;
      this.setState({dislikes: updatedDislikes, disliked: !this.state.disliked});
      this.updatePercentageHandler(this.state.likes, updatedDislikes);
    }
  }

  updatePercentageHandler = (likes, dislikes) => {
    const updatedPercentage = `${Math.round(likes / (likes + dislikes) * 100)}%`;
    this.setState({percentage: updatedPercentage})
  }

  removeMovieHandler = () => this.setState({removed: !this.state.removed});

  formatNumber = (number) => number >= 1000 ? (number / 1000).toFixed(1) + ' K' : number;

  render () {
    let movie = (
      <div className={styles.Movie} id={this.props.id}>
        <div className={styles.Image} style={{backgroundColor: this.props.color}}></div>
        <svg
          className={styles.Remove}
          onClick={this.removeMovieHandler}
          viewBox="0 0 191.414 191.414">
          <path d="M107.888,96.142l80.916-80.916c3.48-3.48,3.48-8.701,0-12.181s-8.701-3.48-12.181,0L95.707,83.961L14.791,3.045   c-3.48-3.48-8.701-3.48-12.181,0s-3.48,8.701,0,12.181l80.915,80.916L2.61,177.057c-3.48,3.48-3.48,8.701,0,12.181   c1.74,1.74,5.22,1.74,6.96,1.74s5.22,0,5.22-1.74l80.916-80.916l80.916,80.916c1.74,1.74,5.22,1.74,6.96,1.74   c1.74,0,5.22,0,5.22-1.74c3.48-3.48,3.48-8.701,0-12.181L107.888,96.142z"/>
        </svg>
        
        <div className={styles.Content}>
          <h2>{this.props.title}</h2>
          <p>{this.props.category}</p>

          <div className={styles.Wrapper}>
            <div className={styles.Opinion}>
              <Likes
                opinion="like"
                liked={this.state.liked}
                liking={this.likeHandler}
                likes={this.formatNumber(this.state.likes)} />
              <Likes
                opinion="dislike"
                liked={this.state.disliked}
                liking={this.dislikeHandler}
                likes={this.formatNumber(this.state.dislikes)}/>
            </div>

            <Meter percentage={this.state.percentage} />
          </div>
        </div>
      </div>
    );

    if (this.state.removed) movie = null;

    return (
      movie
    );
  }
};

export default Movie;
