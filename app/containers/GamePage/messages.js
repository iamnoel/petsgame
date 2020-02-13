/*
 * GamePage Messages
 *
 * This contains all the text for the GamePage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.GamePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the GamePage container!',
  },
  gameMessage: {
    id: `${scope}.gameMessage`,
    defaultMessage:
      'Pet Game is currently under development. Please check back for updates as we hope to be live soon!',
  },
});
