/**
 *
 * PetCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function PetCard() {
  return (
    <div>
      <FormattedMessage {...messages.petMessage} />
    </div>
  );
}

PetCard.propTypes = {};

export default PetCard;
