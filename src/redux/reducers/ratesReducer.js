import * as types from "../../constants/actionTypes";
import { updateObject, getCurrencyById } from "../helpers";
import { fieldNames } from "../../constants/fields";

const initialState = {
  [fieldNames.rates]: [
    { rates: { EUR: 1.18, USD: 1.31 }, base: "GBP", date: "2019-12-06" },
    { rates: { EUR: 0.9, GBP: 0.76 }, base: "USD", date: "2019-12-06" },
    { rates: { USD: 1.11, GBP: 0.84 }, base: "EUR", date: "2019-12-06" }
  ],
  [fieldNames.loading]: false,
  [fieldNames.error]: null,
  [fieldNames.sourceCurrency]: "EUR",
  [fieldNames.destinationCurrency]: "USD"
};

const fetchRatesStart = state => {
  return updateObject(state, {
    [fieldNames.loading]: true
  });
};

const fetchRatesError = state => {
  return updateObject(state, {
    [fieldNames.loading]: false,
    [fieldNames.error]: "Error fetching rates"
  });
};

const fetchRatesDone = (state, action) => {
  return updateObject(state, {
    [fieldNames.loading]: false,
    [fieldNames.rates]: [...state.rates, ...[action.payload]]
  });
};

const updateSourceCurrency = (state, action) => {
  const id = action.payload;
  return updateObject(state, {
    [fieldNames.sourceCurrency]: getCurrencyById(id).value
  });
};

const updateDestinationCurrency = (state, action) => {
  const id = action.payload;
  return updateObject(state, {
    [fieldNames.destinationCurrency]: getCurrencyById(id).value
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_RATES_START: {
      return fetchRatesStart(state);
    }
    case types.FETCH_RATES_ERROR: {
      return fetchRatesError(state);
    }
    case types.FETCH_RATES_DONE: {
      return fetchRatesDone(state, action);
    }
    case types.UPDATE_SOURCE_CURRENCY: {
      return updateSourceCurrency(state, action);
    }
    case types.UPDATE_DESTINATION_CURRENCY: {
      return updateDestinationCurrency(state, action);
    }
    default:
      return state;
  }
};

export default reducer;
