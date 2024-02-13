import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  const [notes, setNotes] = useState([]);

  function onAdd(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function onDelete(id) {
    setNotes((prevValue) => {
      return prevValue.filter((notesdata, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={onAdd} />
      {notes.map((notesItem, index) => {
        return (
          <Note
            title={notesItem.title}
            content={notesItem.content}
            id={index}
            onDelete={onDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
