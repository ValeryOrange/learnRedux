// modules
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { hot } from 'react-hot-loader';

// components
import User from '../components/User';
import Page from '../components/Page';

// actions
import * as pageAction from '../actions/PageAction';

class App extends Component {
  render() {
    const { name } = this.props.user;
    const { photos, year } = this.props.page;
    const { setYear } = pageAction;

    return (
      <div>
        <User name={name}/>
        <Page photos={photos} year={year} setYear={setYear}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default hot(module)(App);
