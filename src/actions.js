export const saveSearchResults = (results) => {
  return {
    type: "SAVE_SEARCH_RESULTS",
    payload: results,
  };
};
export default saveSearchResults;
