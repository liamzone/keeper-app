import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  }

  function preventDefault(event) {
    event.preventDefault();
  }

  function toggleFocus() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={preventDefault}>
        {isExpanded ? (
          <input
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleChange}
          />
        ) : null}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={content}
          onChange={handleChange}
          onFocus={toggleFocus}
        />
        <Zoom in={isExpanded}>
          <Fab
            onClick={() => {
              props.onAdd(uuidv4(), title, content);
              setTitle("");
              setContent("");
              setIsExpanded(false);
            }}
            name="submit"
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
