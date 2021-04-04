import React, { useState } from "react";
import { Input } from "antd";

const { Search } = Input;

function SearchFeature(props) {
  const [SearchTerms, setSearchTerms] = useState("");

  const searchTermHandler = (e) => {
    setSearchTerms(e.currentTarget.value);
    props.refreshFunciton(e.currentTarget.value);
  };

  return (
    <div>
      <Search
        value={SearchTerms}
        onChange={searchTermHandler}
        placeholder="Search By Typing..."
        style={{ width: "50vh", marginBottom: "1.5rem" }}
      />
    </div>
  );
}

export default SearchFeature;
