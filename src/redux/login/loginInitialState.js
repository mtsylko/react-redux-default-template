import { Record } from 'immutable'

const loginInitialState = new Record({
  isFetching: false,
  token: null,
  error: null
});

export default loginInitialState;
