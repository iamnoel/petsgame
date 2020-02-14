/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  authorGreeting: {
    id: `${scope}.authorGreeting.message`,
    defaultMessage: 'Thanks for checking out Pets Game!',
  },
  authorMessage: {
    id: `${scope}.author.message`,
    defaultMessage: `
      Made with love by {author1} and {author2}.
    `,
  },
});
