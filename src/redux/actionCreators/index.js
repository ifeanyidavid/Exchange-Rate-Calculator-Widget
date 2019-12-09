import * as types from "../../constants/actionTypes";

export const saveRates = rates => {
  return { type: types.FETCH_RATES_DONE, payload: rates };
};

export const updateSourceCurrency = slideIndex => {
  return { type: types.UPDATE_SOURCE_CURRENCY, payload: slideIndex };
};

export const updateDestinationCurrency = slideIndex => {
  return { type: types.UPDATE_DESTINATION_CURRENCY, payload: slideIndex };
};

export const exchangeCurrency = (
  sourceAmount,
  destinationAmount,
  sourceCurrency,
  destinationCurrency
) => {
  return {
    type: types.EXCHANGE_CURRENCY,
    payload: {
      sourceAmount,
      destinationAmount,
      sourceCurrency,
      destinationCurrency
    }
  };
};
