import React from "react";
import { Link } from "react-router-dom";

import styles from "./Card.module.scss";
const Card = () => {
  return (
    <div className={styles.card}>
      <h3>Card Title</h3>
      <h4 className="mb-2 text-muted">Card Subtitle</h4>
      <div className={styles.links}>
        <Link to="#">Study</Link>
        <Link to="#">Exercise</Link>
      </div>
    </div>
  );
};

export default Card;
