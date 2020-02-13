/**
 *
 * Asynchronously loads the component for GamePage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
