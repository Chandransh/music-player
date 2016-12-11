/**
 * Created by chandransh on 7/12/16.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory, Link} from 'react-router';

import './Player.css';
import Loader from '../../components/Loader/Loader';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlParamsForPlayer: '&liking=false&download=false&buying=false&sharing=false&show_comments=false&show_user=false&auto_play=true',
      currentTrackId: 0,
      previousTrackId: null,
      nextTrackId: 1
    };
  }

  componentWillMount() {
    const {location, params} = this.props;
    location.state == null && params.genreName !== location.state && browserHistory.push('/music-player/genres');
  }

  handleTrackClick = (trackUrl, currentTrackId) => {
    document.getElementById('sc-widget').src = "https://w.soundcloud.com/player/?url=" + trackUrl + this.state.urlParamsForPlayer;

    this.setState({
      currentTrackId: currentTrackId,
      previousTrackId: currentTrackId !== 0 ? currentTrackId - 1 : null,
      nextTrackId: (currentTrackId < this.props.getTracksByGenre.data.length - 1) ? currentTrackId + 1 : null
    });
  };

  playPreviousTrack = () => {
    const previousTrackId = this.state.previousTrackId;

    this.setState({
      currentTrackId: previousTrackId,
      previousTrackId: (previousTrackId !== 0) ? previousTrackId - 1 : null,
      nextTrackId: previousTrackId + 1
    });

    let trackUrl = this.props.getTracksByGenre.data[previousTrackId].track.uri;
    document.getElementById('sc-widget').src = "https://w.soundcloud.com/player/?url=" + trackUrl + this.state.urlParamsForPlayer;
  };

  playNextTrack = () => {
    const nextTrackId = this.state.nextTrackId;

    this.setState({
      currentTrackId: nextTrackId,
      previousTrackId: nextTrackId - 1,
      nextTrackId: (nextTrackId + 1 < this.props.getTracksByGenre.data.length - 1) ? nextTrackId + 1 : null
    });

    let trackUrl = this.props.getTracksByGenre.data[nextTrackId].track.uri;
    document.getElementById('sc-widget').src = "https://w.soundcloud.com/player/?url=" + trackUrl + this.state.urlParamsForPlayer;
  };

  render() {
    const _self = this;
    const {getTracksByGenre} = _self.props;
    const {urlParamsForPlayer, previousTrackId, nextTrackId} = _self.state;

    let tracksItem = getTracksByGenre.data.length > 0 && getTracksByGenre.data.map(function(trackObj,i) {
      let track = trackObj.track;
      return <li className="clearfix"
                 key={i} uri={track.uri}
                 onClick={_self.handleTrackClick.bind(null, track.uri, i)}>
        <div>
          <img src={track.artwork_url}
               alt={track.artwork_url}/>
          <p title={track.title || "Not Available"}
             className="track-title">
            <strong>{track.title || "Not Available"}</strong>
          </p>
          <p className="artist-name">by {track.publisher_metadata && track.publisher_metadata.artist || "Not Available"}</p>
          <p>
            <small>Album: {track.publisher_metadata && track.publisher_metadata.release_title || "Not Available"}</small>
          </p>
          <p className="user-info">
            <small>
              <em>Uploaded by {track.user && track.user.full_name || "Not Available"}</em>
            </small>
          </p>
        </div>
      </li>;
    });

    return (
      (tracksItem.length > 0) ? <div className="col-sm-12 center-block"
           style={{background: '#ffffff'}}>
        <Link to="/music-player/genres"
              className="btn btn-link">
          &lt; Back to Genres Page
        </Link>
        <h1 className="text-center">Popular songs</h1>
        <br/>
        <ul className="tracks-container">
          {tracksItem}
        </ul>
        <ul className="player-nav">
          {previousTrackId != null && <li className="btn btn-link"
                                          onClick={_self.playPreviousTrack}>
            Previous
          </li>}
          {nextTrackId != null && <li className="btn btn-link"
              onClick={_self.playNextTrack}>
            Next
          </li>}
        </ul>
        <iframe id="sc-widget"
                src={"https://w.soundcloud.com/player/?url=" + tracksItem[0].props.uri + urlParamsForPlayer}
                scrolling="no"
                frameborder="no"
                className="player-widget">
        </iframe>
      </div> : <Loader/>
    );
  }
}

const mapStateToProps = (state) => ({
  getTracksByGenre: state.getTracksByGenre
});

const mapActionToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapActionToProps
)(Player);