/**
 * Created by chandransh on 7/12/16.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

import './Player.css';
import '../../utils/soundcloud-api';

class Player extends Component {
  componentWillMount() {
    const {location, params} = this.props;
    location.state == null && params.genreName !== location.state && browserHistory.push('/music-player/genres');
  }

  render() {
    return (
      <div className="col-sm-12 center-block"
           style={{background: '#ffffff'}}>
        <iframe id="sc-widget" src="https://w.soundcloud.com/player/?url=http://api.soundcloud.com/users/1539950/favorites" width="100%" height="465" scrolling="no" frameborder="no"></iframe>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapActionToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapActionToProps
)(Player);