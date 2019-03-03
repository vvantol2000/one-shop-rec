import React, { Component, PropTypes } from 'react';

/**
 * LandingPage
 */
export class LandingPage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>MY COMPONENT</div>
    );
  }
}

LandingPage.propTypes = {
  prop: PropTypes.type.isRequired
}

export default LandingPage;
