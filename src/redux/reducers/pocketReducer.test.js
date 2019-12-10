import pocketReducer from "./pocketReducer";
import { initialState } from "./pocketReducer";
import { EXCHANGE_CURRENCY } from "../../constants/actionTypes";
import { testData } from "../../constants/testData";

describe("pockets reducer", () => {
  it("should return the initial state", () => {
    expect(pocketReducer(undefined, {})).toMatchSnapshot();
  });
  it("should handle EXCHANGE_CURRENCY", () => {
    expect(
      pocketReducer(initialState, {
        type: EXCHANGE_CURRENCY,
        payload: {
          sourceAmount: testData.sourceAmount,
          destinationAmount: testData.destinationAmount,
          sourceCurrency: testData.sourceCurrency,
          destinationCurrency: testData.destinationCurrency
        }
      })
    ).toMatchSnapshot();
  });
});
