import React from "react";
import AlbumCard from "./AlbumCard";
import { Row, Col } from "react-bootstrap";

class Home extends React.Component {
  state = {
    rockSongs: [],
    hipHopSongs: [],
  };

  rockArtists = [
    "queen",
    "u2",
    "thepolice",
    "eagles",
    "thedoors",
    "oasis",
    "thewho",
    "bonjovi",
  ];

  hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake"];

  handleArtist = async (artistName, category) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName,
        {
          method: "GET",
          headers: new Headers({
            "X-RapidAPI-Key":
              "828f11075cmsh673f44971af4ac0p15da10jsn7af9d8953784",
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          }),
        }
      );
      let result = await response.json();
      let songInfo = result.data;
      this.setState({
        [category]: [...this.state[category], songInfo[0]],
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = async () => {
    let rockRandomArtists = [];
    let hipHopRandomArtists = [];

    while (rockRandomArtists.length < 4) {
      let artist =
        this.rockArtists[Math.floor(Math.random() * this.rockArtists.length)];
      console.log(
        !rockRandomArtists.includes(artist),
        artist,
        rockRandomArtists
      );
      if (!rockRandomArtists.includes(artist)) {
        rockRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist =
        this.hipHopArtists[
          Math.floor(Math.random() * this.hipHopArtists.length)
        ];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }

    for (let j = 0; j < rockRandomArtists.length; j++)
      await this.handleArtist(rockRandomArtists[j], "rockSongs");

    for (let l = 0; l < hipHopRandomArtists.length; l++)
      await this.handleArtist(hipHopRandomArtists[l], "hipHopSongs");
  };

  render() {
    return (
      <Col className="col-12 col-md-9 offset-md-3 mainPage">
        <Row>
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <div>TRENDING</div>
            <div>PODCAST</div>
            <div>MOODS AND GENRES</div>
            <div>NEW RELEASES</div>
            <div>DISCOVER</div>
          </div>
        </Row>
        {this.props.searchResults.length === 0 && (
          <>
            <Row>
              <Col xs={10}>
                <div id="rock">
                  <h2>Rock Classics</h2>
                  <Row
                    className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="rockSection"
                  >
                    {this.state.rockSongs.map((song) => (
                      <AlbumCard song={song} key={song.id} />
                    ))}
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <div id="hiphop">
                  <h2>#HipHop</h2>
                  <Row
                    className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="hipHopSection"
                  >
                    {this.state.hipHopSongs.map((song) => (
                      <AlbumCard song={song} key={song.id} />
                    ))}
                  </Row>
                </div>
              </Col>
            </Row>
          </>
        )}
      </Col>
    );
  }
}

export default Home;
