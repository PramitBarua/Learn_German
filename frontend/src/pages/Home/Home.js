import React from "react";

import Card from "../../components/Card/Card";

import styles from "./Home.module.scss";

// style={{ width: "18rem" }}
const Home = () => {
  const title = [
    "Card Title",
    "Card Title",
    "Card Title",
    "Card Title",
    "Card Title",
    "Card Title",
    "Card Title",
    "Card Title",
    "Card Title",
  ];
  return (
    <div className="section">
      <div>
        <h2>Welcome</h2>
        <p>Description of the page</p>
      </div>
      <h2>Pick a Card</h2>
      <div className={styles.container}>
        {title.map((el, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
