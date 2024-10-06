import React from "react";
import PropTypes from "prop-types";

export const NoteInput = ({ setNotes }) => {
  const charLimit = 50;
  const [remainingChar, setRemainingChar] = React.useState(charLimit);
  const [noteTitle, setNoteTitle] = React.useState("");
  const [noteContent, setNoteContent] = React.useState("");

  const onChangeNoteTitleHandler = (e) => {
    const newTitle = e.target.value;
    if (newTitle.length <= charLimit) {
      setNoteTitle(newTitle);
      setRemainingChar(charLimit - newTitle.length);
    }
  };

  const onChangeNoteContentHandler = (e) => {
    setNoteContent(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newNote = {
      id: new Date().getTime(),
      title: noteTitle,
      body: noteContent,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes((notes) => [...notes, newNote]);
  };

  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <form onSubmit={onSubmitHandler}>
        <p className="note-input__title__char-limit">
          Sisa karakter: {remainingChar}
        </p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Tuliskan judul catatanmu di sini ..."
          required
          value={noteTitle}
          onChange={onChangeNoteTitleHandler}
        />
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Tuliskan catatanmu di sini ..."
          required
          value={noteContent}
          onChange={onChangeNoteContentHandler}
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
};

NoteInput.propTypes = {
  setNotes: PropTypes.func,
};
