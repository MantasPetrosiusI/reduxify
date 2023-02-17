export const SET_PLAYLIST = "SET_PLAYLIST";
export const ADD_SONG_TO_PLAYLIST = "ADD_SONG_TO_PLAYLIST";

export const setPlaylist = (playlist) => ({
  type: SET_PLAYLIST,
  payload: playlist,
});

export const addSongToPlaylist = (playlistId, song) => ({
  type: ADD_SONG_TO_PLAYLIST,
  payload: { playlistId, song },
});
