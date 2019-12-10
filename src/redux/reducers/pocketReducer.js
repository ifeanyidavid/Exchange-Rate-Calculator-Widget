import v4 from "uuid/v4";
import numeral from "numeral";
import * as types from "../../constants/actionTypes";
import { currencies } from "../../constants/currencies";
import { fieldNames } from "../../constants/fields";

export const initialState = {
  pockets: {
    [currencies.EUR.value]: {
      [fieldNames.id]: currencies.EUR.id,
      [fieldNames.currency]: currencies.EUR.value,
      [fieldNames.balance]: 300,
      [fieldNames.symbol]: "€",
      [fieldNames.description]: "Euro"
    },
    [currencies.GBP.value]: {
      [fieldNames.id]: currencies.GBP.id,
      [fieldNames.currency]: currencies.GBP.value,
      [fieldNames.balance]: 300,
      [fieldNames.symbol]: "£",
      [fieldNames.description]: "British Pound"
    },
    [currencies.USD.value]: {
      [fieldNames.id]: currencies.USD.id,
      [fieldNames.currency]: currencies.USD.value,
      [fieldNames.balance]: 300,
      [fieldNames.symbol]: "$",
      [fieldNames.description]: "American Dollar"
    }
  },
  transactionHistory: []
};

const exchangeCurrency = (state, action) => {
  const sourceAmount = action.payload.sourceAmount;
  const destinationAmount = action.payload.destinationAmount;
  const sourceCurrency = action.payload.sourceCurrency;
  const destinationCurrency = action.payload.destinationCurrency;

  const pockets = state.pockets;
  const sourcePocket = pockets[sourceCurrency];
  const destinationPocket = pockets[destinationCurrency];

  const updatedSource = {
    [sourceCurrency]: {
      [fieldNames.id]: sourcePocket.id,
      [fieldNames.currency]: sourceCurrency,
      [fieldNames.balance]: numeral(sourcePocket.balance)
        .add(sourceAmount)
        .value(),
      [fieldNames.symbol]: sourcePocket.symbol,
      [fieldNames.description]: sourcePocket.description
    }
  };

  const updatedDestination = {
    [destinationCurrency]: {
      [fieldNames.id]: destinationPocket.id,
      [fieldNames.currency]: destinationCurrency,
      [fieldNames.balance]: numeral(destinationPocket.balance)
        .add(destinationAmount)
        .value(),
      [fieldNames.symbol]: destinationPocket.symbol,
      [fieldNames.description]: destinationPocket.description
    }
  };

  const oldTransactionHistory = state.transactionHistory;

  const incomingTransactionHistory = {
    id: v4(),
    description: `Exchanged to ${destinationCurrency}`,
    time: new Date().toLocaleTimeString("en-GB"),
    sourceAmount: sourceAmount,
    destinationAmount: destinationAmount,
    sourceCurrency: sourceCurrency,
    destinationCurrency: destinationCurrency
  };

  return {
    pockets: Object.assign({}, pockets, updatedSource, updatedDestination),
    transactionHistory: [
      ...oldTransactionHistory,
      ...[incomingTransactionHistory]
    ]
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EXCHANGE_CURRENCY: {
      return exchangeCurrency(state, action);
    }
    default:
      return state;
  }
};

export default reducer;
