// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { NoteSearch } from "./NoteSearch";

export const Header = ({ searchKeyword, setSearchKeyword }) => {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <NoteSearch
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
    </div>
  );
};

Header.propTypes = {
  searchKeyword: PropTypes.string,
  setSearchKeyword: PropTypes.func,
};
