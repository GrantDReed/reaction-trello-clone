import React from 'react';

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from './CurrentBoardActions';
import * as types from '../constants/ActionTypes';
import * as statuses from '../constants/Statuses';

import apiClient from '../lib/ApiClient.js';
jest.mock('../lib/ApiClient');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Current board actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    apiClient.getBoards.mockClear();
    apiClient.createBoard.mockClear();
    store.clearActions()
  });

  describe("fetchBoardRequest", () => {
    it("returns the correct object", () => {
      expect(
        actions.fetchBoardRequest()
      ).toEqual({ type: types.FETCH_BOARD_REQUEST });
    });
  });

  describe("fetchBoardSuccess", () => {
    it("returns the correct object", () => {
      const board = { id: 1, title: "my board" };

      expect(
        actions.fetchBoardSuccess(board)
      ).toEqual({ type: types.FETCH_BOARD_SUCCESS, currentBoard: board });
    });
  });


  describe("action creators", () => {
    let storeActions;

    describe("fetchBoard", () => {
      const board = {
        id: 1,
        title: 'Super cool board'
      }

      const cb = jest.fn();

      beforeEach(() => {
        store.dispatch(actions.fetchBoard(1));

        const invocationArgs = apiClient.getBoard.mock.calls[0];
        const callback = invocationArgs[1];

        storeActions = store.getActions();
      });

      it("dispatches fetchBoardRequest()", () => {
        expect(storeActions[0]).toEqual(actions.fetchBoardRequest());
      });

      it("dispatches fetchBoardSuccess()", () => {
        expect(storeActions[1]).toEqual(actions.fetchBoardSuccess(board));
      });
    });
  });
});
