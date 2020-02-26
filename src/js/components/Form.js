// src/js/components/Form.jsx
import React, { useState } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

const ConnectedForm = props => {
  const [title, setTitle] = useState("");

  const handleChange = event => {
    setTitle(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addArticle({ title });
    setTitle("");
  };

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={event => handleChange(event)}
        />
      </div>
      <button type="submit">SAVE</button>
    </form>
  );
};

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
