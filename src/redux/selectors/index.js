import { createSelector } from "reselect";

const pocketsSelector = state => state.pocketsReducer.pockets;
const ratesSelector = state => state.ratesReducer;
const sourceCurrencySelector = state => state.ratesReducer.sourceCurrency;
const destinationCurrencySelector = state =>
  state.ratesReducer.destinationCurrency;

const transactionHistorySelector = state =>
  state.pocketsReducer.transactionHistory;

export const pocketValues = createSelector([pocketsSelector], pockets => {
  return Object.values(pockets);
});

export const getSourceCurrency = createSelector(
  [sourceCurrencySelector],
  sourceCurrency => {
    return sourceCurrency;
  }
);

export const getDestinationCurrency = createSelector(
  [destinationCurrencySelector],
  destinationCurrency => {
    return destinationCurrency;
  }
);

export const getRates = createSelector([ratesSelector], data => {
  return data.rates;
});

export const getSourceConversionRates = createSelector(
  [getRates, sourceCurrencySelector, destinationCurrencySelector],
  (rates, sourceCurrency, destinationCurrency) => {
    if (rates.filter(rate => rate.base === sourceCurrency).length > 0) {
      return rates.filter(rate => rate.base === sourceCurrency)[0].rates[
        destinationCurrency
      ];
    }
  }
);

export const getDestinationConversionRates = createSelector(
  [getRates, sourceCurrencySelector, destinationCurrencySelector],
  (rates, sourceCurrency, destinationCurrency) => {
    if (rates.filter(rate => rate.base === destinationCurrency).length > 0) {
      return rates.filter(rate => rate.base === destinationCurrency)[0].rates[
        sourceCurrency
      ];
    }
  }
);

export const getTransactionHistory = createSelector(
  [transactionHistorySelector],
  transactionHistory => {
    return transactionHistory;
  }
);
