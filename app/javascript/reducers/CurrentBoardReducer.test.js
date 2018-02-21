import reducer from './CurrentBoardReducer';
import * as types from '../constants/ActionTypes';

describe("CurrentBoardReducer", () => {
  describe("unknown type", () => {
    it("returns the state parameter", () => {
      expect(
        reducer("param value", { type: "FAKE_TYPE_FOR_TEST" })
      ).toEqual("param value");
    });
  });

  describe("FETCH_BOARD_SUCCESS", () => {
    it("returns the action.currentBoard value", () => {
      expect(
        reducer({}, {
          type: types.FETCH_BOARD_SUCCESS,
          currentBoard: { id: 1, title: "My board" },
        })
      ).toEqual({ id: 1, title: "My board" });
    });
  });
});
