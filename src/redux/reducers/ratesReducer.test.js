import pocketReducer from "./pocketReducer";
import { initialState } from "./pocketReducer";
import {
  FETCH_RATES_START,
  FETCH_RATES_ERROR,
  FETCH_RATES_DONE,
  UPDATE_SOURCE_CURRENCY,
  UPDATE_DESTINATION_CURRENCY
} from "../../constants/actionTypes";
import { testData } from "../../constants/testData";

describe("Rates reducer", () => {
  it("should return the initial state", () => {
    expect(pocketReducer(undefined, {})).toMatchSnapshot();
  });
  it("should handle FETCH_RATES_START", () => {
    expect(
      pocketReducer(initialState, {
        type: FETCH_RATES_START
      })
    ).toMatchSnapshot();
  });

  it("should handle FETCH_RATES_ERROR", () => {
    expect(
      pocketReducer(initialState, {
        type: FETCH_RATES_ERROR,
        payload: testData.error
      })
    ).toMatchSnapshot();
  });

  it("should handle FETCH_RATES_DONE", () => {
    expect(
      pocketReducer(initialState, {
        type: FETCH_RATES_DONE,
        payload: testData.rates
      })
    ).toMatchSnapshot();
  });

  it("should handle UPDATE_SOURCE_CURRENCY", () => {
    expect(
      pocketReducer(initialState, {
        type: UPDATE_SOURCE_CURRENCY,
        payload: testData.slideIndex
      })
    ).toMatchSnapshot();
  });

  it("should handle UPDATE_DESTINATION_CURRENCY", () => {
    expect(
      pocketReducer(initialState, {
        type: UPDATE_DESTINATION_CURRENCY,
        payload: testData.slideIndex
      })
    ).toMatchSnapshot();
  });
});
