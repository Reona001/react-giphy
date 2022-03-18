import React from 'react';
import Gif from './Gif';

const GifList = ({ gifIDs, setSelectedGif }) => {
  // const { gifIDs } = props;
  // ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  return (
    <div className="gif-list">
      { gifIDs.map((gifID) => <Gif gifID={gifID} setSelectedGif={setSelectedGif} key={gifID} />)}
    </div>
  );
};

export default GifList;

//giphy-api allows you to use callback function
//import or require your plugin
// there's only require for giphy
