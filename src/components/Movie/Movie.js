import React from 'react';

import styles from './Movie.module.css';

const movie = (props) => (
  <div className={styles.Movie} id={props.id}>
    <div className={styles.Image}></div>
    <div className={styles.Content}>
      <h2>{props.title}</h2>
      <p>{props.category}</p>
      <div className={styles.Wrapper}>
        <div className={styles.Likes}>
          <meter id="fuel" name="fuel"
            min="0" max="100"
            low="33" high="66" optimum="80"
            value="20">
            at 50/100
          </meter>
          <div className={styles.Numbers}>
            <p>{props.likes} likes - {props.dislikes} dislikes</p>
          </div>
        </div>
        <button className={styles.Button}>Like</button>
      </div>
    </div>
  </div>
);

export default movie;
