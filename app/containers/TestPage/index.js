/**
 *
 * TestPage
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
import makeSelectTestPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function TestPage() {
  useInjectReducer({ key: 'testPage', reducer });
  useInjectSaga({ key: 'testPage', saga });
  const h1Style = {
    color: 'red',
    textShadow: '2px 2px 0px #000000',
  };

  return (
    <div style={{ textAlign: 'center', margin: '30px 0px' }}>
      <Helmet>
        <title>TestPage</title>
        <meta name="description" content="Description of TestPage" />
      </Helmet>
      <h1 style={h1Style}>
        <FormattedMessage {...messages.theTestMessage} />
      </h1>
    </div>
  );
}

TestPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  testPage: makeSelectTestPage(),
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

export default compose(withConnect)(TestPage);
