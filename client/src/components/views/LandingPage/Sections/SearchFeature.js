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
      />
    </div>
  );
}

export default SearchFeature;
