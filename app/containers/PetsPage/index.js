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
import PetCard from 'components/PetCard/Loadable';
import makeSelectPetsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { feedPet } from './actions';

export function PetsPage({ handleFeed, pets }) {
  useInjectReducer({ key: 'petsPage', reducer });
  useInjectSaga({ key: 'petsPage', saga });

  return (
    <div>
      <Helmet>
        <title>My Pets</title>
        <meta
          name="description"
          content="Find a list of all your currently owned pets."
        />
      </Helmet>
      <div className="container">
        {pets.map(data => (
          <PetCard key={data.id} pet={data} handleFeed={handleFeed} />
        ))}
      </div>
    </div>
  );
}

PetsPage.propTypes = {
  pets: PropTypes.array,
  handleFeed: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  pets: makeSelectPetsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleFeed: evt => {
      dispatch(
        feedPet(
          evt.target.parentNode.getAttribute('petid') ||
            evt.target.getAttribute('petid'),
        ),
      );
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(PetsPage);
