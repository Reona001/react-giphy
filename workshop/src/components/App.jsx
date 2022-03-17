import React, { useState } from 'react';  //anything use is a hook
import Gif from './Gif';
import SearchBar from './SearchBar';
import GifList from './GifList';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  const [selectedID, setSelectedID] = useState("WuGSL4LFUMQU");
  const [gifIDs, setGifIDs] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);
  // const selectedID = "WuGSL4LFUMQU";
  // const gifIDs = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  // Whenever you change a state the component will change everywhere you use the component
  const changeGifs = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      // this.setState({ giIdList: res.data.map(gif => gif.id) });
      const gifs = res.data.map((gif) => gif.id);
      setGifIDs(gifs);
    });
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar changeGifs={changeGifs} />
        <div className="selected-gif">
          <Gif gifIDs={selectedID} />
        </div>
      </div>

      <div className="right-scene">
        <GifList gifIDs={gifIDs} setSelectedID={setSelectedID} />
      </div>
    </div>
  );
};

export default App;
