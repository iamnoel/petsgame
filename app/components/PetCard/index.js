/**
 *
 * PetCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function PetCard(props) {
  return (
    <div
      style={{
        border: '1px solid #560c7a',
        textAlign: 'center',
        paddingBottom: '15px',
        marginBottom: '10px',
        color: '#560c7a'
      }}
      className="col-sm"
      key={props.pet.id}
    >
      <h1>{props.pet.name}</h1>
      <p>{props.pet.type}</p>
      <p>{props.pet.health}</p>
      <button style={{color: 'white', backgroundColor: '#560c7a', borderColor: 'white'}} petid={props.pet.id} type="submit" onClick={props.handleFeed}>Feed</button>{/* Note: Get the id inside of reducer to identify pet */}
    </div>
  );
}

PetCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  health: PropTypes.string,
  handleFeed: PropTypes.func,
};

export default PetCard;
