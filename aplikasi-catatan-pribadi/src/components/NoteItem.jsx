// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

export const NoteItem = ({
  noteId,
  noteTitle,
  noteCreatedAt,
  noteContent,
  noteArchived,
  setNotes,
}) => {
  const onDeleteHandler = () => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };
  const onArchiveHandler = () => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => {
        if (note.id === noteId) {
          return { ...note, archived: !note.archived };
        } else {
          return note;
        }
      })
    );
  };

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{noteTitle}</h3>
        <p className="note-item__date">{showFormattedDate(noteCreatedAt)}</p>
        <p className="note-item__body">{noteContent}</p>
      </div>
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          type="button"
          onClick={onDeleteHandler}
        >
          Delete
        </button>
        <button
          className="note-item__archive-button"
          type="button"
          onClick={onArchiveHandler}
        >
          {noteArchived ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
};

NoteItem.propTypes = {
  noteId: PropTypes.number,
  noteTitle: PropTypes.string,
  noteCreatedAt: PropTypes.string,
  noteContent: PropTypes.string,
  noteArchived: PropTypes.bool,
  setNotes: PropTypes.func,
};
