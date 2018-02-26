export default function currentCardReducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_CARD_SUCCESS':
      return action.currentCard;
    case 'UPDATE_CARD_SUCCESS':
      return action.currentCard;
    case 'CREATE_COMMENT_SUCCESS':
      return action.currentCard;
    default:
      return state;
  }
}
