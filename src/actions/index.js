import { createRoutine } from 'redux-saga-routines';

export const GET_PEOPLE = 'GET_PEOPLE';

export const getPeople = createRoutine(GET_PEOPLE);
