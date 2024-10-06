// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { NoteItem } from "./NoteItem";
import { NoteEmpty } from "./NoteEmpty";

export const NotesList = ({ notes, setNotes }) => {
  return (
    <>
      {notes.length > 0 ? (
        <div className="notes-list">
          {notes.map((note) => {
            return (
              <NoteItem
                key={note.id}
                noteId={note.id}
                noteTitle={note.title}
                noteCreatedAt={note.createdAt}
                noteContent={note.body}
                noteArchived={note.archived}
                setNotes={setNotes}
              />
            );
          })}
        </div>
      ) : (
        <NoteEmpty />
      )}
    </>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  setNotes: PropTypes.func,
};
