import React, { Component } from "react";
import axios from "axios";
import AddUpdateForm from "../../components/AddUpdateForm/AddUpdateForm";

// import styles from "./AddWord.module.scss";

class AddWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      germanMain: "",
      germanAlt: "",
      englishMain: "",
      englishAlt: "",
      partOfSpeech: "",
      level: null,
      rating: 0,
    };
  }

  handleSubmit = (e) => {
    console.log(`in handlesubmit!!`);
    e.preventDefault();
    const newWord = {
      germanMain: e.target.germanMain.value,
      germanAlt: e.target.germanAlt.value,
      englishMain: e.target.englishMain.value,
      englishAlt: e.target.englishAlt.value,
      partOfSpeech: e.target.partOfSpeech.value,
      level: Number(e.target.level.value),
      rating: Number(e.target.rating.value),
    };
    console.log(newWord);

    axios
      .post(`http://localhost:5000/api/v1/wordlist/`, newWord)
      .then((res) => console.log(res.data));
  };
  render() {
    return (
      <div className="section">
        <h2>Add new word</h2>
        <AddUpdateForm
          type="Word"
          germanMain={this.state.germanMain}
          germanAlt={this.state.germanAlt}
          englishMain={this.state.englishMain}
          englishAlt={this.state.englishAlt}
          partOfSpeech={this.state.partOfSpeech}
          level={this.state.level}
          rating={this.state.rating}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default AddWord;
