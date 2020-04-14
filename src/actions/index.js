// TODO: add and export your own actions
import axios from 'axios';

export const SET_BUSINESSES = 'SET_BUSINESSES';

export function setBusinesses(term, location, sortBy) {
  // debugger
  const config = {
    headers: {'Authorization': `Bearer API Key`},
    params: {
      term: term,
      location: location,
      sort_by: sortBy
    }
  };
  const promise = axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', config)
    .then(response => response.data);
  return {
    type: 'SET_BUSINESSES',
    payload: promise
  };
}
