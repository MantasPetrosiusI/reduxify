import React from "react";
import { connect } from "react-redux";

const Player = ({ currentSong }) => {
  return (
    <div>
      {currentSong ? (
        <div>
          <h2>{currentSong.title}</h2>
          <p>{currentSong.artist}</p>
          <p>{currentSong.album}</p>
          <p>{currentSong.duration}</p>
        </div>
      ) : (
        <p>No song currently playing</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentSong: state.song.currentSong,
});

export default connect(mapStateToProps)(Player);
