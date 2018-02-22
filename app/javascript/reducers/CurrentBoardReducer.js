export default function boardsReducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_BOARD_SUCCESS':
      return action.currentBoard;

    case 'UPDATE_LIST_SUCCESS':
      return action.currentBoard;

    default:
      return state;
  }
}
