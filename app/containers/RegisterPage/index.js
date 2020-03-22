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
import { setInputs, onSubmit } from './actions';

export function RegisterPage({ handleInputChange, handleSubmit, inputs }) {
  useInjectReducer({ key: 'registerPage', reducer });
  useInjectSaga({ key: 'registerPage', saga });

  return (
    <div>
      <Helmet>
        <title>RegisterPage</title>
        <meta name="description" content="Description of RegisterPage" />
      </Helmet>
      <div style={{ textAlign: 'center' }}>
        <form
          action="https://dev-api-petsgame.herokuapp.com/user"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label>Name </label>
            <input
              className="form-control"
              name="name"
              required="required"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>E-Mail </label>
            <input
              className="form-control"
              name="email"
              required="required"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Password </label>
            <input
              className="form-control"
              name="password"
              required="required"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password </label>
            <input
              className="form-control"
              name="confirmPassword"
              required="required"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <button onClick={handleSubmit} type="button">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

RegisterPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  registerPage: makeSelectRegisterPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleInputChange: evt => {
      evt.persist();
      const name = evt.target.name;
      const value = evt.target.value;

      dispatch(setInputs(name, value));
    },
    handleSubmit: evt => {
      evt.preventDefault();

      dispatch(onSubmit());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(RegisterPage);
