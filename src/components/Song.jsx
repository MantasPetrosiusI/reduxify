import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSongToPlaylist } from "../actions/playlistActions";
import { likeSong } from "../actions/searchActions";

const Song = ({ song }) => {
  const dispatch = useDispatch();
  const { currentPlaylist, likedSongs } = useSelector((state) => state.song);

  const isLiked = likedSongs.includes(song.id);

  const handleAddToPlaylist = (playlistId) => {
    dispatch(addSongToPlaylist(playlistId, song));
  };

  const handleLike = () => {
    dispatch(likeSong(song.id));
  };

  return (
    <div className="song">
      <img src={song.album.cover} alt={song.title} />
      <div className="song-details">
        <h2>{song.title}</h2>
        <h3>{song.artist.name}</h3>
        <p>Album: {song.album.title}</p>
        <p>Duration: {song.duration}</p>
      </div>
      <div className="song-actions">
        {currentPlaylist && (
          <select
            value={currentPlaylist._id}
            onChange={(e) => handleAddToPlaylist(e.target.value)}
          >
            <option value="" disabled>
              Add to playlist
            </option>
            <option value="queue">Playing queue</option>
            <option value="favorites">Favorites</option>
          </select>
        )}
        <button className={isLiked ? "liked" : ""} onClick={handleLike}>
          Like
        </button>
      </div>
    </div>
  );
};

export default Song;
