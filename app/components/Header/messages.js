/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  features: {
    id: `${scope}.play`,
    defaultMessage: 'Play',
  },
  pets: {
    id: `${scope}.pets`,
    defaultMessage: 'Pets',
  },
  store: {
    id: `${scope}.store`,
    defaultMessage: 'Store',
  },
  register: {
    id: `${scope}.register`,
    defaultMessage: 'Register',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
});
