/**
 *
 * PetsPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectInventory } from 'containers/App/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import PetCard from 'components/PetCard/Loadable';
import { feedPet, loadPetInventory } from 'containers/App/actions';
import makeSelectPetsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
// import { feedPet } from './actions';

export function PetsPage({ handleFeed, inventory, onPageLoad }) {
  useInjectReducer({ key: 'petsPage', reducer });
  useInjectSaga({ key: 'petsPage', saga });

  useEffect(() => {
    onPageLoad();
  }, []);

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
        {inventory.length < 1 && <h1>LOADING</h1>}
        {inventory.map(data => (
          // eslint-disable-next-line no-underscore-dangle
          <PetCard key={data._id} pet={data} handleFeed={handleFeed} />
        ))}
      </div>
    </div>
  );
}

PetsPage.propTypes = {
  handleFeed: PropTypes.func,
  inventory: PropTypes.array,
  onPageLoad: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  inventory: makeSelectInventory(),
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
    onPageLoad: () => {
      dispatch(loadPetInventory());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(PetsPage);
