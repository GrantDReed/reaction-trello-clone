import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function updateListRequest() {
  return { type: types.UPDATE_LIST_REQUEST };
}

export function updateListSuccess(updatedBoard) {
  return { type: types.UPDATE_LIST_SUCCESS, currentBoard: updatedBoard };
}

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function createListSuccess(updatedBoard) {
  return { type: types.CREATE_LIST_SUCCESS, currentBoard: updatedBoard };
}

export function updateList(listId, title) {
  return function(dispatch) {
    dispatch(updateListRequest());
    apiClient.updateList(listId, title, updatedBoard => {
      dispatch(updateListSuccess(updatedBoard));
    });
  }
}

export function createList(boardId, title) {
  return function(dispatch) {
    dispatch(createListRequest());
    apiClient.createList(boardId, title, updatedBoard => {
      dispatch(createListSuccess(updatedBoard));
    });
  }
}