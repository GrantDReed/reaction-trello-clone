export default function statusReducer(state, action) {
  switch (action.type) {
    case 'FETCH_BOARDS_REQUEST':
      return 'FETCHING_BOARDS';
    case 'FETCH_BOARDS_SUCCESS':
      return 'BOARDS_FETCHED_SUCCESSFULLY';
    case 'FETCH_BOARD_REQUEST':
      return 'FETCHING_BOARD';
    case 'FETCH_BOARD_SUCCESS':
      return 'BOARD_FETCHED_SUCCESSFULLY'
    default:
      return state;
  }
};
