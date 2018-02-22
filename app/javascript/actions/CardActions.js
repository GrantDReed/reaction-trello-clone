import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function createCardRequest() {
  return {type: types.CREATE_CARD_REQUEST};
}

export function createCardSuccess(board) {
  return {type: types.CREATE_BOARD_SUCCESS, currentBoard: board};
}

export function createCard(listId, card) {
  return function (dispatch) {
    dispatch(createCardRequest());
    apiClient.createCard(listId, card, (board) => {
      dispatch(createCardSuccess(board));
    })
  }
}
