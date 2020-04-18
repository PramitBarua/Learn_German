import React from "react";
import { Link } from "react-router-dom";

import styles from "./VerticalNavbar.module.scss";

const VerticalNavbar = () => {
  return (
    <div className={styles.verticalNavbar}>
      <ul>
        <li>
          <Link className="btn_primary" to="/">
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
        <li>
          <Link to="/add/word/" className="btn_primary">
            Add
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default VerticalNavbar;
