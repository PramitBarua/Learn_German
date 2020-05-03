import React from "react";
import { Link } from "react-router-dom";

import styles from "./VerticalNavbar.module.scss";

const VerticalNavbar = () => {
  return (
    <div className={styles.verticalNavbar}>
      <ul>
        <li>
          <Link to="/" className="btn_primary">
            Word
          </Link>
        </li>
        <li>
          <Link to="/" className="btn_primary">
            Sentence
          </Link>
        </li>
        <li>
          <Link to="/" className="btn_primary">
            Passage
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default VerticalNavbar;
