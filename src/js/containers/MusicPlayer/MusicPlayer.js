/**
 * Created by chandransh on 6/12/16.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import './MusicPlayer.css';

class MusicPlayer extends Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
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
)(MusicPlayer);
