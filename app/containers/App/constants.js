/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const ADD_PET_INVENTORY = 'boilerplate/App/ADD_PET_INVENTORY';
export const ADD_PET_INVENTORY_SUCCESS = 'boilerplate/App/ADD_PET_INVENTORY_SUCCESS';
export const LOAD_PET_INVENTORY = 'boilerplate/App/LOAD_PET_INVENTORY';
export const LOAD_PET_INVENTORY_SUCCESS = 'boilerplate/App/LOAD_PET_INVENTORY_SUCCESS';
export const FEED_PET = 'boilerplate/App/FEED_PET';
export const FEED_PET_SUCCESS = 'boilerplate/App/FEED_PET_SUCCESS';
export const CHECK_AUTHORIZATION = 'boilerplate/App/CHECK_AUTHORIZATION';
export const CHECK_AUTHORIZATION_SUCCESS = 'boilerplate/App/CHECK_AUTHORIZATION';
export const CHECK_AUTHORIZATION_FAIL = 'boilerplate/App/CHECK_AUTHORIZATION';
export const DEV_INVENTORY_ID = '5e756171d271768aead0afcb';
export const DEV_API_URL = 'https://dev-api-petsgame.herokuapp.com';
