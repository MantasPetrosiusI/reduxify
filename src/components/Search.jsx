import SpotifyWebApi from "spotify-web-api-js";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import saveSearchResults from "../actions";

const spotifyApi = new SpotifyWebApi();

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    spotifyApi.search(searchQuery, ["track"]).then((response) => {
      dispatch(saveSearchResults(response.tracks.items));
    });
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
}

export default Search;
