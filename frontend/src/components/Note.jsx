import React from "react";
import "../styles/Note.css";

export default function Note({ note, onDelete }) {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");
  const { id, content, title } = note;

  return (
    <div className="note-container">
      <p className="note-title">{title}</p>
      <p className="note-content">{content}</p>
      <p className="note-date">{formattedDate}</p>
      <button className="delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
