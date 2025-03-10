import React, { useState } from "react";
import SearchButton from "./SearchButton";
const Search = props => {
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInput(event) {
    const { value } = event.target;
    setSearchInput(value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.search(searchInput);
  }
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form onSubmit={handleSubmit} className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                value={searchInput}
                onChange={handleSearchInput}
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <SearchButton buttonText="Search" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Search;
