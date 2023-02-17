import {
  ADD_SONG_TO_PLAYLIST,
  SET_SELECTED_PLAYLIST,
} from "../actions/playlistActions";

const initialState = {
  selectedPlaylist: null,
  playlists: {
    queue: { name: "Queue", songs: [] },
    favorites: { name: "Favorites", songs: [] },
  },
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG_TO_PLAYLIST:
      const { playlistName, song } = action.payload;
      const updatedPlaylist = {
        ...state.playlists[playlistName],
        songs: [...state.playlists[playlistName].songs, song],
      };
      const updatedPlaylists = {
        ...state.playlists,
        [playlistName]: updatedPlaylist,
      };
      return {
        ...state,
        playlists: updatedPlaylists,
      };
    case SET_SELECTED_PLAYLIST:
      return {
        ...state,
        selectedPlaylist: action.payload,
      };
    default:
      return state;
  }
};

export default playlistReducer;
