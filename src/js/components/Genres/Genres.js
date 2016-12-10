/**
 * Created by chandransh on 7/12/16.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import fetch from 'isomorphic-fetch';

import './Genres.css';
import * as GetTracksByGenre from '../../reducers/getTracksByGenre';

class Genres extends Component {
  loadTracks = (genre) => {
    const clientId = 'fDoItMDbsbZz8dY16ZzARCZmzgHBPotA';

    fetch(`https://api-v2.soundcloud.com/charts?kind=top&genre=soundcloud%3Agenres%3A${genre}&client_id=${clientId}&limit=20&offset=0&linked_partitioning=1&app_version=1481210409`)
    .then((responseObj) => {
      let headerContentType = responseObj.headers.get('content-type');
      if (headerContentType !== null && headerContentType.indexOf('application/json') >= 0) {
        return responseObj.json();
      }
    })
    .then((response) => {
      return this.props.GetTracksByGenre.loadSuccess(response);
    })
    .catch((error) => {
      return this.props.GetTracksByGenre.loadFailure(error);
    });
  };

  getRandomColor = () => {
    let hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
  };

  render() {
    return (
      <div className="genres-container col-sm-12 center-block">
        <div className="col-sm-12 center-block"
             style={{background: '#ffffff'}}>
          <Link to="/music-player/"
                className="btn btn-link">
            &lt; Back to Home Page
          </Link>
          <h1 className="text-center">Select a genre to continue</h1>
          <br/>
          <ul className="row">
            <li onClick={this.loadTracks.bind(null,'alternativerock')}>
              <Link to={{pathname: "/music-player/alternativerock/play", state: "alternativerock"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Alternative Rock</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'ambient')}>
              <Link to={{pathname: "/music-player/ambient/play", state: "ambient"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Ambient</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'classical')}>
              <Link to={{pathname: "/music-player/classical/play", state: "classical"}}
                     className="genre-btn"
                    style={{background: this.getRandomColor()}}>Classical</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'country')}>
              <Link to={{pathname: "/music-player/country/play", state: "country"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Country</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'danceedm')}>
              <Link to={{pathname: "/music-player/danceedm/play", state: "danceedm"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Dance &amp; EDM</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'dancehall')}>
              <Link to={{pathname: "/music-player/dancehall/play", state: "dancehall"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Dancehall</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'deephouse')}>
              <Link to={{pathname: "/music-player/deephouse/play", state: "deephouse"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Deep House</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'disco')}>
              <Link to={{pathname: "/music-player/disco/play", state: "disco"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Disco</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'drumbass')}>
              <Link to={{pathname: "/music-player/drumbass/play", state: "drumbass"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Drum &amp; Bass</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'dubstep')}>
              <Link to={{pathname: "/music-player/dubstep/play", state: "dubstep"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Dubstep</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'electronic')}>
              <Link to={{pathname: "/music-player/electronic/play", state: "electronic"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Electronic</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'folksingersongwriter')}>
              <Link to={{pathname: "/music-player/folksingersongwriter/play", state: "folksingersongwriter"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Folk &amp; Singer-Songwriter</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'hiphoprap')}>
              <Link to={{pathname: "/music-player/hiphoprap/play", state: "hiphoprap"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Hip-hop &amp; Rap</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'house')}>
              <Link to={{pathname: "/music-player/house/play", state: "house"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>House</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'indie')}>
              <Link to={{pathname: "/music-player/indie/play", state: "indie"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Indie</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'jazzblues')}>
              <Link to={{pathname: "/music-player/jazzblues/play", state: "jazzblues"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Jazz &amp; Blues</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'latin')}>
              <Link to={{pathname: "/music-player/latin/play", state: "latin"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Latin</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'metal')}>
              <Link to={{pathname: "/music-player/metal/play", state: "metal"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Metal</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'piano')}>
              <Link to={{pathname: "/music-player/piano/play", state: "piano"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Piano</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'pop')}>
              <Link to={{pathname: "/music-player/pop/play", state: "pop"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Pop</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'rbsoul')}>
              <Link to={{pathname: "/music-player/rbsoul/play", state: "rbsoul"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>R&amp;B &amp; Soul</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'reggae')}>
              <Link to={{pathname: "/music-player/reggae/play", state: "reggae"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Reggae</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'reggaeton')}>
              <Link to={{pathname: "/music-player/reggaeton/play", state: "reggaeton"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Reggaeton</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'rock')}>
              <Link to={{pathname: "/music-player/rock/play", state: "rock"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Rock</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'soundtrack')}>
              <Link to={{pathname: "/music-player/soundtrack/play", state: "soundtrack"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Soundtrack</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'techno')}>
              <Link to={{pathname: "/music-player/techno/play", state: "techno"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Techno</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'trance')}>
              <Link to={{pathname: "/music-player/trance/play", state: "trance"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Trance</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'trap')}>
              <Link to={{pathname: "/music-player/trap/play", state: "trap"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Trap</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'triphop')}>
              <Link to={{pathname: "/music-player/triphop/play", state: "triphop"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>Triphop</Link>
            </li>
            <li onClick={this.loadTracks.bind(null,'world')}>
              <Link to={{pathname: "/music-player/world/play", state: "world"}}
                    className="genre-btn"
                    style={{background: this.getRandomColor()}}>World</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getTracksByGenre: state.getTracksByGenre
});

const mapActionToProps = (dispatch) => ({
  GetTracksByGenre: bindActionCreators(GetTracksByGenre, dispatch)
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(Genres);