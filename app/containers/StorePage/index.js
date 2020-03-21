/**
 *
 * StorePage
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
import { addPetInventory } from 'containers/App/actions';
import makeSelectStorePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadPets, purchasePet } from './actions';

export function StorePage({ pets, handlePurchase, loadStorePets }) {
  useInjectReducer({ key: 'storePage', reducer });
  useInjectSaga({ key: 'storePage', saga });

  useEffect(() => {
    loadStorePets();
  }, []);

  return (
    <div>
      <Helmet>
        <title>StorePage</title>
        <meta name="description" content="Description of StorePage" />
      </Helmet>
      <div className="container">
        {pets.map(data => (
          // eslint-disable-next-line no-underscore-dangle
          <PetCard key={data._id} pet={data} handlePurchase={handlePurchase} />
        ))}
      </div>
    </div>
  );
}

StorePage.propTypes = {
  dispatch: PropTypes.func,
  pets: PropTypes.array,
  handlePurchase: PropTypes.func,
  loadStorePets: PropTypes.func,
  inventory: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  pets: makeSelectStorePage(),
  inventory: makeSelectInventory(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handlePurchase: evt => {
      dispatch(
        addPetInventory(
          evt.target.parentNode.getAttribute('petid') ||
            evt.target.getAttribute('petid'),
        ),
      );
    },
    loadStorePets: () => {
      dispatch(loadPets());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(StorePage);
