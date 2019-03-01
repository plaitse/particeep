import React from 'react';

import styles from './Movie.module.css';

const movie = (props) => (
  <div className={styles.Movie} id={props.id}>
    <div className={styles.Image}></div>
    <div className={styles.Content}>
      <h2>{props.title}</h2>
      <div className={styles.Wrapper}>
        <p>{props.category}</p>
        <div className={styles.Likes}>
          <p>{props.likes} likes</p>
          <p>{props.dislikes} dislikes</p>
        </div>
      </div>
      <div className={styles.Footer}>
        <button className={styles.Button}>Like</button>
      </div>
    </div>
  </div>
);

export default movie;
