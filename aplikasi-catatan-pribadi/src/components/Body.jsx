// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { NoteInput } from "./NoteInput";
import { NotesList } from "./NotesList";

export const Body = ({ notes, setNotes }) => {
  const activeNotes = notes.filter((note) => note.archived === false);
  const archivedNotes = notes.filter((note) => note.archived === true);

  return (
    <div className="note-app__body">
      <NoteInput setNotes={setNotes} />
      <h2>Catatan Aktif</h2>
      <NotesList notes={activeNotes} setNotes={setNotes} />
      <h2>Arsip</h2>
      <NotesList notes={archivedNotes} setNotes={setNotes} />
    </div>
  );
};

Body.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  setNotes: PropTypes.func,
};
