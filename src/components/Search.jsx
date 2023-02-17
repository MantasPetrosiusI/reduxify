import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import AlbumCard from "./AlbumCard";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  let headers = new Headers({
    "X-RapidAPI-Key": "828f11075cmsh673f44971af4ac0p15da10jsn7af9d8953784",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  });

  const search = async (string) => {
    if (string.length > 2) {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            string,
          {
            method: "GET",
            headers,
          }
        );

        let result = await response.json();
        let songs = result.data;

        setSearchResults(songs);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <Col className="col-12 col-md-9 offset-md-3 mainPage">
        <Row>
          <Col xs={10}>
            <div id="searchResults">
              <input
                type="text"
                className="form-control mb-2"
                id="searchField"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
                onChange={(event) => setSearchInput(event.currentTarget.value)}
              />
              <div className="text-center mt-3">
                <button
                  className="btn btn-outline-secondary btn-sm "
                  type="button"
                  id="button-addon1"
                  onClick={() => search(searchInput)}
                >
                  Search
                </button>
              </div>

              <h2 className="text-center mt-4">Search Results</h2>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {searchResults.map((song) => (
                  <AlbumCard song={song} key={song.id} />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Search;
