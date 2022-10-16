import React, { useState } from "react";

const NewPost = ({ onCreate }) => {
  const [newValue, setNewValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {
    const value = e.target.value;
    setNewValue(value);
  }
  function handleClickCreate() {
    onCreate(newValue);
    setNewValue("");
}
    return (
      <form className="NewPostForm" onSubmit={handleSubmit}>
        <input
          type="text"
          label="new post"
          className="postInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="buttonCreate" onClick={handleClickCreate}>
          Public
        </button>
      </form>
    );
  
};

export default NewPost;
