import React from 'react';

import styles from './Meter.module.css';

const meter = (props) => (
  <meter id="likes" name="likes" min="0" max="100">
    <div className={styles.Gauge}>
      <span style={{width: props.percentage}}></span>
    </div>
  </meter>
);

export default meter;
