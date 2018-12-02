import { handleActions } from 'redux-actions';

import { getPeople } from '../actions';

const INITIAL_STATE = {
  hasLoadedPeople: false,
  errorGettingPeople: false,
  list: [],
};

const people = handleActions(
  {
    [getPeople.REQUEST]: state => ({
      ...state,
      list: [],
      hasLoadedPeople: false,
      errorGettingPeople: false,
    }),
    [getPeople.FAILURE]: state => ({
      ...state,
      errorGettingPeople: true,
    }),
    [getPeople.SUCCESS]: (state, { payload }) => ({
      ...state,
      hasLoadedPeople: true,
      list: payload.people,
    }),
  },
  INITIAL_STATE,
);

export default people;
