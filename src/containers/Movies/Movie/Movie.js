import React, { Component } from 'react';

import styles from './Movie.module.css';

class Movie extends Component {
  state = {
    likes: this.props.likes,
    dislikes: this.props.dislikes,
    liked: false
  }

  // Add button dislike -> disable button like

  likeHandler = () => {
    if (this.state.liked) {
      const oldCount = this.state.likes;
      const updatedCount = oldCount - 1;
      let updatedLikes = {
        ...this.state.likes
      };
      updatedLikes = updatedCount;
      this.setState({likes: updatedLikes, liked: !this.state.liked});
    } else {
      const oldCount = this.state.likes;
      const updatedCount = oldCount + 1;
      let updatedLikes = {
        ...this.state.likes
      };
      updatedLikes = updatedCount;
      this.setState({likes: updatedLikes, liked: !this.state.liked});
    }
  }

  render () {
    // Determine gauge meter bar percentage
    let value = '0%';
    if (this.props.likes >= 1 && this.props.likes < 10) value = '5%';
    if (this.props.likes >= 10 && this.props.likes < 100) value = '10%';
    if (this.props.likes >= 100 && this.props.likes < 1000) value = '50%';
    if (this.props.likes >= 1000) value = '100%';

    return (
      <div className={styles.Movie} id={this.props.id}>
        <div className={styles.Image}></div>
        <div className={styles.Content}>
          <h2>{this.props.title}</h2>
          <p>{this.props.category}</p>
          <div className={styles.Wrapper}>
            <div className={styles.Likes}>
              <meter id="likes" name="likes" min="0" max="100">
                <div className={styles.Gauge}>
                  <span style={{width: value}}></span>
                </div>
              </meter>
              <div className={styles.Numbers}>
                <p>{this.state.likes} likes - {this.state.dislikes} dislikes</p>
              </div>
            </div>
            <button
              className={this.state.liked ? styles.Liked : styles.Button }
              onClick={this.likeHandler}
              >Like</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Movie;
