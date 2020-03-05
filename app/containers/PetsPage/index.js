/**
 *
 * PetsPage
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
import makeSelectPetsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function PetsPage() {
  useInjectReducer({ key: 'petsPage', reducer });
  useInjectSaga({ key: 'petsPage', saga });

  const fakeData = {
    pets: [
      { name: 'Dragon Pet', type: 'Dragon', health: 10 },
      { name: 'Tiger Pet', type: 'Tiger', health: 10 },
      { name: 'Angel Pet', type: 'Angel', health: 10 },
      { name: 'Demon Pet', type: 'Demon', health: 10 },
    ],
  };

  return (
    <div>
      <Helmet>
        <title>My Pets</title>
        <meta
          name="description"
          content="Find a list of all your currently owned pets."
        />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <div className="container">
        {fakeData.pets.map(data => (
          <div
            style={{ border: '1px solid black', textAlign: 'center' }}
            className="col-sm"
          >
            <h1>{data.name}</h1>
            <p>{data.type}</p>
            <p>{data.health}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

PetsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  petsPage: makeSelectPetsPage(),
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

export default compose(withConnect)(PetsPage);
