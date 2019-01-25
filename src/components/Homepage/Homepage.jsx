import React, { Component } from 'react';
import { connect } from 'react-redux';

import { likesSelector } from './../../_selectors/likesSelector';

class Homepage extends Component {
  addLike = () => {
    this.props.Add();
  };
  render() {
    console.log('props', this.props);
    return (
      <div className="App">
        <p>Likes: {this.props.likes}</p>
        <button onClick={this.addLike}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  likes: likesSelector(state)
});

const mapDispatchToProps = dispatch => ({
  Add: () => dispatch({ type: 'ADD_LIKE' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
