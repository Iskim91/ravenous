import {SET_BUSINESSES} from '../actions/index';

export default function (state = [], action) {

  switch (action.type) {
    case 'SET_BUSINESSES':
      return action.payload.businesses;
    default:
      return state;
  }
}
