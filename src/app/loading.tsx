'use client';
import React from 'react';
import styles from './loading.module.css';

const Loading: React.FC = () => {
  console.log('Loading component is rendered');
  return (
    <div className={styles.loader} role="status" aria-live="polite" aria-label="Loading">
      <div className={styles.cir1}></div>
      <div className={styles.cir2}></div>
      <div className={styles.cir3}></div>
      <div className={styles.cir4}></div>
      <div className={styles.cir5}></div>
      <span className={styles.srOnly}>Loading...</span>
    </div>
  );
};

export default Loading;