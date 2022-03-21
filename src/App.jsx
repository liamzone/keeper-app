import React, { useState } from "react";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import savedNotes from "./notes";

function App() {
  const [notes, setNotes] = useState([]);

  function addItem(uuid, title, content) {
    setNotes((prevNotes) => {
      return [...prevNotes, { uuid: uuid, title: title, content: content }];
    });
  }

  function deleteItem(uuid) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.uuid !== uuid;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {notes.map((note) => {
        return (
          <Note
            key={note.uuid}
            uuid={note.uuid}
            title={note.title}
            content={note.content}
            onDelete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
