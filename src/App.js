import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { Row } from "react-bootstrap";
import Artist from "./components/Artist";
import Album from "./components/Album";
import { useState } from "react";
import Search from "./components/Search";

let headers = new Headers({
  "X-RapidAPI-Key": "828f11075cmsh673f44971af4ac0p15da10jsn7af9d8953784",
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
});

function App() {
  const [searchResults, setSearchResults] = useState([]);

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
    <Router>
      <div className="container-fluid">
        <Row>
          <Sidebar search={search} />
          <Routes>
            <Route
              path="/"
              exact
              element={<Home searchResults={searchResults} />}
            />
            <Route path="/search" element={<Search />} />
            <Route path="/artist/:id" element={<Artist />} />
            <Route path="/album/:id" element={<Album />} />
          </Routes>
        </Row>
      </div>
      <Player />
    </Router>
  );
}

export default App;
