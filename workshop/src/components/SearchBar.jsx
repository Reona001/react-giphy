import React from 'react';

const SearchBar = () => {
  // const { searchGiphy } = props;
  const handleChange =(event) => {
    console.log(event.currentTarget.value);
    searchGiphy(event.currentTarget.value);
  };

  return (
    <input type="text" className="form-search form-control" onChange={handleChange} />
  );
};

export default SearchBar;
