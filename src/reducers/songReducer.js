import { SET_SELECTED_SONG, SET_LIKED_SONG } from "../actions/songActions";

const initialState = {
  selectedSong: null,
  likedSongs: {},
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_SONG:
      return {
        ...state,
        selectedSong: action.payload,
      };
    case SET_LIKED_SONG:
      const { songId, liked } = action.payload;
      const updatedLikedSongs = { ...state.likedSongs, [songId]: liked };
      return {
        ...state,
        likedSongs: updatedLikedSongs,
      };
    default:
      return state;
  }
};

export default songReducer;
