// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

export const NoteSearch = ({ searchKeyword, setSearchKeyword }) => {
  const onKeywordChangeHandler = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan ..."
        value={searchKeyword}
        onChange={onKeywordChangeHandler}
      />
    </div>
  );
};

NoteSearch.propTypes = {
  searchKeyword: PropTypes.string,
  setSearchKeyword: PropTypes.func,
};
