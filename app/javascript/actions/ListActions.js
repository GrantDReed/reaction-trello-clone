import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function updateListRequest() {
  return { type: types.UPDATE_LIST_REQUEST };
}

export function updateListSuccess(updatedBoard) {
  return { type: types.UPDATE_LIST_SUCCESS, currentBoard: updatedBoard };
}

export function updateList(listId, data) {
  return function(dispatch) {
    dispatch(updateListRequest());
    apiClient.updateList(listId, data, updatedBoard => {
      dispatch(updateListSuccess(updatedBoard));
    });
  }
}
