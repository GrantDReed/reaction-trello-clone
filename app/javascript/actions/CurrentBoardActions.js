import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function fetchBoardRequest() {
  return {type: types.FETCH_BOARD_REQUEST};
}

export function fetchBoardSuccess(board) {
  return {type: types.FETCH_BOARD_SUCCESS, currentBoard: board};
}

export function fetchBoard(boardId) {
  return function (dispatch) {
    dispatch(fetchBoardRequest());
    apiClient.getBoard(boardId, (board) => {
      dispatch(fetchBoardSuccess(board));
    })
  }
}
