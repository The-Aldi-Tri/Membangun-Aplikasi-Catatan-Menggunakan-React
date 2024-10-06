import React from "react";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { getInitialData } from "./utils";

export const App = () => {
  const [notes, setNotes] = React.useState(getInitialData);
  const [searchKeyword, setSearchKeyword] = React.useState("");

  return (
    <>
      <Header
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <Body
        notes={
          searchKeyword
            ? notes.filter((note) =>
                note.title.toLowerCase().includes(searchKeyword.toLowerCase())
              )
            : notes
        }
        setNotes={setNotes}
      />
    </>
  );
};
