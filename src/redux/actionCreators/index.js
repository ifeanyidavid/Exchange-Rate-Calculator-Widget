import {
  FETCH_RATES_START,
  FETCH_RATES_ERROR,
  FETCH_RATES_DONE,
  UPDATE_SOURCE_CURRENCY,
  UPDATE_DESTINATION_CURRENCY,
  EXCHANGE_CURRENCY
} from "../../constants/actionTypes";

export const saveRatesStart = () => {
  return { type: FETCH_RATES_START };
};

export const saveRatesFail = error => {
  return { type: FETCH_RATES_ERROR, payload: error };
};

export const saveRatesDone = rates => {
  return { type: FETCH_RATES_DONE, payload: rates };
};

export const updateSourceCurrency = slideIndex => {
  return { type: UPDATE_SOURCE_CURRENCY, payload: slideIndex };
};

export const updateDestinationCurrency = slideIndex => {
  return { type: UPDATE_DESTINATION_CURRENCY, payload: slideIndex };
};

export const exchangeCurrency = (
  sourceAmount,
  destinationAmount,
  sourceCurrency,
  destinationCurrency
) => {
  return {
    type: EXCHANGE_CURRENCY,
    payload: {
      sourceAmount,
      destinationAmount,
      sourceCurrency,
      destinationCurrency
    }
  };
};
