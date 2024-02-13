import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function onSubmit(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          rows="3"
          name="content"
          value={note.content}
          type="text"
          placeholder="Write a note..."
          onChange={handleChange}
        />
        <button type="submit" onClick={onSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
