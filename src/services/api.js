const BASE_URL = "https://striveschool-api.herokuapp.com/api/deezer";

export const searchSongs = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search?q=${query}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSong = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/track/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
