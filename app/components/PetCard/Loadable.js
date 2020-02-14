/**
 *
 * Asynchronously loads the component for PetCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
