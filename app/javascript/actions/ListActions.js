import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function updateListRequest() {
  return { type: types.UPDATE_LIST_REQUEST };
}

export function updateListSuccess(boardId, listId, updatedList) {
  return { type: types.UPDATE_LIST_SUCCESS, boardId, listId, updatedList };
}

export function updateList(boardId, listId, data) {
  return function(dispatch) {
    dispatch(updateListRequest());
    apiClient.updateList(boardId, listId, data, updatedList => {
      dispatch(updateListSuccess(boardId, listId, updatedList));
    });
  }
}