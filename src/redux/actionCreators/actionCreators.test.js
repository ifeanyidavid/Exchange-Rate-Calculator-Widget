import configureMockStore from "redux-mock-store";

import {
  saveRatesStart,
  saveRatesFail,
  saveRatesDone,
  exchangeCurrency,
  updateDestinationCurrency,
  updateSourceCurrency
} from "./index";
import { testData } from "../../constants/testData";

const mockStore = configureMockStore();
const store = mockStore({});

/* RATES ACTION CREATORS TEST CASES */

describe("Rates action creators", () => {
  it("should dispatch FETCH_RATES_START action", () => {
    store.dispatch(saveRatesStart());
    expect(store.getActions()).toMatchSnapshot();
  });

  it("should dispatch FETCH_RATES_ERROR and error to store in state", () => {
    store.dispatch(saveRatesFail(testData.error));
    expect(store.getActions()).toMatchSnapshot();
  });

  it("should dispatch FETCH_RATES_DONE and data to store in state", () => {
    store.dispatch(saveRatesDone(testData.rates));
    expect(store.getActions()).toMatchSnapshot();
  });

  it("should dispatch UPDATE_SOURCE_CURRENCY and slideIndex to store in state", () => {
    store.dispatch(updateSourceCurrency(testData.slideIndex));
    expect(store.getActions()).toMatchSnapshot();
  });

  it("should dispatch UPDATE_DESTINATION_CURRENCY and slideIndex to store in state", () => {
    store.dispatch(updateDestinationCurrency(testData.slideIndex));
    expect(store.getActions()).toMatchSnapshot();
  });
});

/* POCKETS ACTION CREATORS TEST CASES */
describe("Pockets action creators", () => {
  it("should EXCHANGE_CURRENCY and data to store in state", () => {
    const sourceAmount = testData.sourceAmount;
    const destinationAmount = testData.destinationAmount;
    const sourceCurrency = testData.sourceCurrency;
    const destinationCurrency = testData.destinationCurrency;

    store.dispatch(
      exchangeCurrency(
        sourceAmount,
        destinationAmount,
        sourceCurrency,
        destinationCurrency
      )
    );

    expect(store.getActions()).toMatchSnapshot();
  });
});
