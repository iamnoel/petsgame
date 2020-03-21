/**
 *
 * RegisterPage
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
import makeSelectRegisterPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function RegisterPage() {
  useInjectReducer({ key: 'registerPage', reducer });
  useInjectSaga({ key: 'registerPage', saga });

  return (
    <div>
      <Helmet>
        <title>RegisterPage</title>
        <meta name="description" content="Description of RegisterPage" />
      </Helmet>
      <div style={{ textAlign: 'center' }}>
        <form action="" method="POST" onSubmit="onSubmitFunction">
          <div className="form-group">
            <label>Name </label>
            <input
              className="form-control"
              name="name"
              required="required"
              onChange="{handleInputChange}"
            />
          </div>
          <div className="form-group">
            <label>E-Mail </label>
            <input
              className="form-control"
              name="email"
              required="required"
              onChange="{handleInputChange}"
            />
          </div>
          <div className="form-group">
            <label>Password </label>
            <input
              className="form-control"
              name="password"
              required="required"
              onChange="{handleInputChange}"
            />
          </div>
          <div className="form-group">
            <label>Confirm Password </label>
            <input
              className="form-control"
              name="confirmPassword"
              required="required"
              onChange="{handleInputChange}"
            />
          </div>
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

RegisterPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  registerPage: makeSelectRegisterPage(),
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

export default compose(withConnect)(RegisterPage);
