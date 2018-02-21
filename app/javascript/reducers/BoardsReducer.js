export default function boardsReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_BOARDS_SUCCESS':
      return action.boards;

    case 'CREATE_BOARD_SUCCESS':
      const newBoard = action.board;
      newBoard.id = Number(newBoard.id);
      return state.concat(newBoard);

    default:
      return state;
  }
}
