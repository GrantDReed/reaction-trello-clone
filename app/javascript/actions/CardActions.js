import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function createCardRequest() {
  return {type: types.CREATE_CARD_REQUEST};
}

export function createCardSuccess(board) {
  return {type: types.CREATE_CARD_SUCCESS, currentBoard: board};
}

export function createCard(listId, title) {
  return function (dispatch) {
    dispatch(createCardRequest());
    apiClient.createCard(listId, title, (board) => {
      dispatch(createCardSuccess(board));
    })
  }
}
