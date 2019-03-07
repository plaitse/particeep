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
    percentage: this.props.percentage
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

  formatNumber = (number) => number >= 1000 ? (number / 1000).toFixed(1) + ' K' : number;

  render () {
    return (
      <div className={styles.Movie} id={this.props.id}>
        <div className={styles.Image}></div>
        
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
  }
};

export default Movie;
