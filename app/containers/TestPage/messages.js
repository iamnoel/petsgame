/*
 * TestPage Messages
 *
 * This contains all the text for the TestPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.TestPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the TestPage container!',
  },
  theTestMessage: {
    id: `${scope}.theTestMessage`,
    defaultMessage: 'Welcome to Pets Game V0.1 Alpha',
  },
});
