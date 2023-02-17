import React, { useState } from "react";
import { connect } from "react-redux";

import { searchSongs } from "../services/api";
import { selectSong } from "../actions/searchActions";

import Song from "./Song";

const HomePage = ({ searchResults, searchSongs, selectSong }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    searchSongs(query);
  };

  const handleSongSelect = (song) => {
    selectSong(song);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search for a song"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {searchResults.map((song) => (
          <Song key={song.id} song={song} onSelect={handleSongSelect} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchResults: state.search.results,
});

const mapDispatchToProps = {
  searchSongs,
  selectSong,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
