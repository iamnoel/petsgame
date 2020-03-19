/**
 *
 * PetCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Button from '@material-ui/core/Button';

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
        color: '#560c7a',
      }}
      className="col-sm"
      key={props.pet.id}
    >
      <h1>{props.pet.name}</h1>
      <p>{props.pet.type}</p>
      <p>{props.pet.health}</p>
      {props.handleFeed && (
        <Button
          variant="contained"
          color="secondary"
          onClick={props.handleFeed}
          petid={props.pet.id}
          type="submit"
        >
          Feed
        </Button>
      )}
      {props.handlePurchase && (
        <Button
          variant="contained"
          color="secondary"
          onClick={props.handlePurchase}
          petid={props.pet.id}
          type="submit"
        >
          Purchase
        </Button>
      )}
    </div>
  );
}

PetCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  health: PropTypes.string,
  handleFeed: PropTypes.func,
  pet: PropTypes.object,
  handlePurchase: PropTypes.func,
};

export default PetCard;
