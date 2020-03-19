/**
 *
 * Asynchronously loads the component for ItemCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
