/*
 * PetCard Messages
 *
 * This contains all the text for the PetCard component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.PetCard';

export default defineMessages({
  petMessage: {
    id: `${scope}.petMessage`,
    defaultMessage: 'This is where pet info will be.',
  },
});
