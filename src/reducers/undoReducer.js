import { UNDO_ACTION } from "../actions/undoActions";

const initialState = {
  history: [],
};

const undoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UNDO_ACTION:
      const newHistory = [...state.history];
      const previousState = newHistory.pop();
      return {
        ...state,
        history: newHistory,
        ...previousState,
      };
    default:
      return {
        ...state,
        history: [...state.history, { ...state }],
      };
  }
};

export default undoReducer;
