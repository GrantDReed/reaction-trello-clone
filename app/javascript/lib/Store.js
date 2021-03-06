import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import boardsReducer from '../reducers/BoardsReducer';
import statusReducer from '../reducers/StatusReducer';
import currentBoardReducer from '../reducers/CurrentBoardReducer';
import currentCardReducer from '../reducers/CurrentCardReducer';

function reducer(state = {}, action) {
  return {
    boards: boardsReducer(state.boards, action),
    status: statusReducer(state.status, action),
    currentBoard: currentBoardReducer(state.currentBoard, action),
    currentCard: currentCardReducer(state.currentCard, action)
  };
}

const logger = createLogger({collapsed: true});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(ReduxThunk, logger))
)

export default store
