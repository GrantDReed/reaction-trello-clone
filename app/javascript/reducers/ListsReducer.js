export default function listsReducer(state = [], action) {
  switch (action.type) {
    case 'UPDATE_LIST_SUCCESS':
      const { boardId, listId, updatedList } = action;
      return state.map(list => {
        if (list.board_id === boardId && list.id === listId) {
          return updatedList;
        } else {
          return list;
        }
      });

    default:
      return state
  }
}