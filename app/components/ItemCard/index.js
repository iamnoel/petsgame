/**
 *
 * ItemCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ItemCard() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ItemCard.propTypes = {};

export default ItemCard;
