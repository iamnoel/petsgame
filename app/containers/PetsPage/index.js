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
import { feedPet } from './actions';

export function PetsPage({ handleFeed }) {
  useInjectReducer({ key: 'petsPage', reducer });
  useInjectSaga({ key: 'petsPage', saga });

  // const apiData = {
  //   pets: [
  //     { id: 1, name: 'Dragon Pet', type: 'Dragon', health: 10 },
  //     { id: 2, name: 'Tiger Pet', type: 'Tiger', health: 10 },
  //     { id: 3, name: 'Angel Pet', type: 'Angel', health: 10 },
  //     { id: 4, name: 'Demon Pet', type: 'Demon', health: 10 },
  //   ],
  // };

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
        {/* {apiData.pets.map(data => (
          <div
            style={{
              border: '1px solid black',
              textAlign: 'center',
              paddingBottom: '15px',
              marginBottom: '10px',
            }}
            className="col-sm"
            key={data.id}
          >
            <h1>{data.name}</h1>
            <p>{data.type}</p>
            <p>{data.health}</p>
            <button onClick={handleFeed}>Feed</button>
          </div>
        ))} */}
        <button type="submit" onClick={handleFeed}>
          Feed Me
        </button>
      </div>
    </div>
  );
}

PetsPage.propTypes = {
  pets: PropTypes.array,
  handleFeed: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  petsPage: makeSelectPetsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleFeed: evt => {
      dispatch(feedPet());
      if (evt) {
      }
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(PetsPage);
