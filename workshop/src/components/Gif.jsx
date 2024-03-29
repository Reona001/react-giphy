import React from 'react';

const Gif = ({ gifID, setSelectedID }) => {
  // const gifID = "gG6OcTSRWaSis";
  const url = `https://media.giphy.com/media/${gifID}/giphy.gif`;
  const handleClick = () => {
    // console.log("click");
    setSelectedID(gifID);
  };

  return (
    <img
      src={url} //js code here!!!
      alt="gif"
      className="gif"
      onClick={handleClick}
    />
  );
};

export default Gif;
