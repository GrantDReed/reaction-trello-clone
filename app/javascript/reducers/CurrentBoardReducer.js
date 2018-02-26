export default function currentBoardReducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_BOARD_SUCCESS':
      return action.currentBoard;
    case 'CREATE_CARD_SUCCESS':
      return action.currentBoard;
    case 'UPDATE_LIST_SUCCESS':
      return action.currentBoard;
    default:
      return state;
  }
}
