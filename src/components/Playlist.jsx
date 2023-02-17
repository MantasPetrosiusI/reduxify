import React from "react";
import { connect } from "react-redux";

import { addSongToPlaylist } from "../actions/playlistActions";

const Playlist = ({ currentSong, playlists, addSongToPlaylist }) => {
  const handleAddToPlaylist = (playlistId) => {
    addSongToPlaylist({ playlistId, song: currentSong });
  };

  return (
    <div>
      <h3>Playlists</h3>
      {playlists.map((playlist) => (
        <div key={playlist.id}>
          <h4>{playlist.name}</h4>
          <button onClick={() => handleAddToPlaylist(playlist.id)}>
            Add to playlist
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentSong: state.song.currentSong,
  playlists: state.playlist.playlists,
});

const mapDispatchToProps = {
  addSongToPlaylist,
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
