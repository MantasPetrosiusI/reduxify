export const SEARCH_SONGS_REQUEST = "SEARCH_SONGS_REQUEST";
export const SEARCH_SONGS_SUCCESS = "SEARCH_SONGS_SUCCESS";
export const SEARCH_SONGS_FAILURE = "SEARCH_SONGS_FAILURE";
export const SELECT_SONG = "SELECT_SONG";
export const LIKE_SONG = "LIKE_SONG";

export const searchSongsRequest = () => ({
  type: SEARCH_SONGS_REQUEST,
});

export const searchSongsSuccess = (songs) => ({
  type: SEARCH_SONGS_SUCCESS,
  payload: songs,
});

export const searchSongsFailure = (error) => ({
  type: SEARCH_SONGS_FAILURE,
  payload: error,
});

export const selectSong = (song) => ({
  type: SELECT_SONG,
  payload: song,
});

export const likeSong = (songId) => ({
  type: LIKE_SONG,
  payload: songId,
});
