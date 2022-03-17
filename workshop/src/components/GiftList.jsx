import React from 'react';
import Gif from './Gif';

const GifList = ({ gifIDs }) => {
  const gifIDs = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  return (
    <div className="gif-list">
      { gifIDs.map((id) => <Gif gifID={id} key={id} />) }
    </div>
  );
};

export default GifList;

//giphy-api allows you to use callback function
//import or require
