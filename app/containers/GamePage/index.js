/**
 *
 * GamePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectGamePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function GamePage() {
  useInjectReducer({ key: 'gamePage', reducer });
  useInjectSaga({ key: 'gamePage', saga });

  const h1Style = {
    color: 'red',
    textShadow: '2px 2px 0px #000000',
  };

  return (
    <div style={{ textAlign: 'center', margin: '30px 0px' }}>
      <Helmet>
        <title>Pets Game</title>
        <meta name="description" content="Description of GamePage" />
      </Helmet>
      <h1 style={h1Style}>
        <FormattedMessage {...messages.gameMessage} />
      </h1>
    </div>
  );
}

GamePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  gamePage: makeSelectGamePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(GamePage);
