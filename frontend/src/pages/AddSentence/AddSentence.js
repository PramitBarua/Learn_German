import React from "react";
import AddUpdateForm from "../../components/AddUpdateForm/AddUpdateForm";
const AddSentence = () => {
  return (
    <>
      <h3>Add new sentence in the DB</h3>
      <AddUpdateForm type="Sentence" />
    </>
  );
};

export default AddSentence;
