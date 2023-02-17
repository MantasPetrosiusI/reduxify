import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/HomePage";
import Player from "./components/Player";
import Playlist from "./components/Playlist";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" component={Homepage} />
          <Route path="/player" component={Player} />
          <Route path="/playlist" component={Playlist} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
