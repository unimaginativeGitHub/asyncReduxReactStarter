import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';

import { fetchRedditIndex } from '../actions';

class App extends Component {
  static propTypes = {
    redditReducer: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    // load reddit index
    this.props.dispatch(fetchRedditIndex());
  }

  render() {

    const redditsList = (
      this.props.redditReducer
      && this.props.redditReducer.redditsList
      && (this.props.redditReducer.redditsList.length > 0)
    ) ? this.props.redditReducer.redditsList
    : [{ name: 'no reddits...' }];

    return (
      <Panel
        style={ {
          marginTop: '20px',
          marginRight: '100px',
          marginLeft: '100px',
          marginBottom: '20px'
        } }
        header={ <h1>Popular Reddits (titles)</h1> }>

        { redditsList.map((next, index) => {
          return (
            <li key={ `reddits_${index}` }>
              <a href={ `https://www.reddit.com${
                  next.data ? next.data.permalink : ''
                }` }>{ next.data ? next.data.title : 'no title listed' }</a>
            </li>
          );
        }) }
      </Panel>
    );
  }
}

const mapStateToProps = state => {
  const {
    redditReducer
  } = state;

  return {
    redditReducer
  };
};

export default connect(mapStateToProps)(App);
