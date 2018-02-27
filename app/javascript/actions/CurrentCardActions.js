import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function fetchCardRequest() {
  return {type: types.FETCH_CARD_REQUEST};
}

export function fetchCardSuccess(card) {
  return {type: types.FETCH_CARD_SUCCESS, currentCard: card};
}

export function fetchCard(cardId) {
  return function (dispatch) {
    dispatch(fetchCardRequest());
    apiClient.fetchCard(cardId, (card) => {
      dispatch(fetchCardSuccess(card));
    })
  }
}

export function createCommentRequest() {
  return {type: types.CREATE_COMMENT_REQUEST};
}

export function createCommentSuccess(card) {
  return {type: types.CREATE_COMMENT_SUCCESS, currentCard: card};
}

export function createComment(cardId, user, text) {
  return function (dispatch) {
    dispatch(createCommentRequest());
    apiClient.createComment(cardId, user, text , (card) => {
      dispatch(createCommentSuccess(card));
    })
  }
}
