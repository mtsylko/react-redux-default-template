import ActionTypes from '../actionTypes'
const { LOAD_TODO_LIST } = ActionTypes;

const dataSource = [
  {id: 1, text: 'Item 1'},
  {id: 2, text: 'Item 2'},
  {id: 3, text: 'Item 3'},
  {id: 4, text: 'Item 4'},
  {id: 5, text: 'Item 5'}
];

export function load() {
  return dispatch => dispatch({
    type: LOAD_TODO_LIST,
    payload: dataSource
  });
}