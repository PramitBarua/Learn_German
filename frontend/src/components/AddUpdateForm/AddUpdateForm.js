import React from "react";

import styles from "./AddUpdateForm.module.scss";

const AddUpdateForm = (props) => {
  let partOfSpeech = null;
  if (props.type === "Word") {
    partOfSpeech = (
      <div className={styles.labelInput}>
        <h3>Part Of Speech</h3>
        <input
          type="text"
          name="partOfSpeech"
          defaultValue={props.partOfSpeech}
          placeholder="required"
          required
        />
      </div>
    );
  }

  return (
    <form
      action="submit"
      onSubmit={props.onSubmit}
      className={styles.formStyle}
    >
      <div className={`${styles.labelInput} ${styles.col6of12_1}`}>
        <h3>German {props.type}</h3>
        <input
          type="text"
          name="germanMain"
          defaultValue={props.germanMain}
          placeholder="required"
          required
        />
      </div>
      <div className={`${styles.labelInput} ${styles.col6of12_2}`}>
        <h3>German Synonyms</h3>
        <input
          type="text"
          name="germanAlt"
          defaultValue={props.germanAlt}
          placeholder="optional"
        />
      </div>

      <div className={`${styles.labelInput} ${styles.col6of12_1}`}>
        <h3>English {props.type}</h3>
        <input
          type="text"
          name="englishMain"
          defaultValue={props.englishMain}
          placeholder="required"
          required
        />
      </div>
      <div className={`${styles.labelInput} ${styles.col6of12_2}`}>
        <h3>English Synonyms</h3>
        <input
          type="text"
          name="englishAlt"
          defaultValue={props.englishAlt}
          placeholder="optional"
        />
      </div>

      <div className={`${styles.row} ${styles.col12of12}`}>
        {partOfSpeech}
        <div className={styles.labelInput}>
          <h3>Level</h3>
          <input
            type="text"
            name="level"
            defaultValue={props.level}
            placeholder="required"
            required
          />
        </div>

        <div className={styles.labelInput}>
          <h3>Rating</h3>
          <input
            type="number"
            name="rating"
            min="-10"
            max="10"
            defaultValue={props.rating}
            required
          />
        </div>
      </div>

      <div className={`${styles.labelInput} ${styles.col12of12}`}>
        <h3>Note</h3>
        <textarea name="note" rows="4" placeholder="optional" />
      </div>
      <button type="submit" className="btn_primary">
        Submit
      </button>
    </form>
    // <form onSubmit={props.onSubmit}>

    //   <Form.Row>
    //     <Form.Group as={Col} sm={12} md={6} controlId="formGridEnglishMain">
    //       <Form.Label>English {props.type}</Form.Label>
    //       <Form.Control
    //         type="text"
    //         name="englishMain"
    //         defaultValue={props.englishMain}
    //         placeholder="required"
    //         required
    //       />
    //     </Form.Group>

    //     <Form.Group as={Col} sm={12} md={6} controlId="formGridEnglishAlt">
    //       <Form.Label>English {props.type} (alternative meaning)</Form.Label>
    //       <Form.Control
    //         type="text"
    //         name="englishAlt"
    //         defaultValue={props.englishAlt}
    //         placeholder="optional"
    //       />
    //     </Form.Group>
    //   </Form.Row>

    //   <Form.Row>
    //     {partOfSpeech}

    //     <Form.Group as={Col} controlId="formGridLevel">
    //       <Form.Label>Level</Form.Label>
    //       <Form.Control
    //         type="number"
    //         name="level"
    //         min="1"
    //         defaultValue={props.level}
    //         required
    //       />
    //     </Form.Group>

    //     <Form.Group as={Col} controlId="formGridRating">
    //       <Form.Label>Rating</Form.Label>
    //       <Form.Control
    //         type="number"
    //         name="rating"
    //         min="-10"
    //         max="10"
    //         defaultValue={props.rating}
    //         required
    //       />
    //     </Form.Group>
    //   </Form.Row>

    //   <Form.Group controlId="formGridNote">
    //     <Form.Label>Note</Form.Label>
    //     <Form.Control as="textarea" rows={4} />
    //   </Form.Group>

    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </form>
  );
};

export default AddUpdateForm;
