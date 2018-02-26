import axios from 'axios';
import * as routes from '../constants/ApiRoutes';

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';

const apiClient = {
  getBoards: function(callback) {
    return axios.get(routes.BOARDS_INDEX_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createBoard: function(board, callback) {
    return axios.post(routes.CREATE_BOARD_URL, { board })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getBoard: function(boardId, callback) {
    return axios.get(routes.boardUrl(boardId))
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  updateList: function(listId, list, callback) {
    return axios.put(routes.updateListUrl(listId), { list })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  fetchCard: function(cardId, callback) {
    return axios.get(routes.cardUrl(cardId))
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createCard: function(listId, title, callback) {
    return axios.post(routes.CREATE_CARD_URL, { list_id: listId, title })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  updateCurrentCard: function(cardId, card, callback) {
    return axios.put(routes.updateCardUrl(cardId), { card })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createComment: function(cardId, user, text, callback) {
    return axios.post(routes.CREATE_COMMENT_URL, {card_id: cardId, user, text })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  }
};

export default apiClient;
