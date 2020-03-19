/*
 * ItemCard Messages
 *
 * This contains all the text for the ItemCard component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ItemCard';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ItemCard component!',
  },
});
