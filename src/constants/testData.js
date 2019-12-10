import { currencies } from "./currencies";
import { fieldNames } from "./fields";

export const testData = {
  rates: [
    {
      rates: { USD: 1.1075, GBP: 0.84195 },
      base: "EUR",
      date: "2019-12-09"
    },
    {
      rates: { EUR: 1.1877189857, USD: 1.3153987766 },
      base: "GBP",
      date: "2019-12-09"
    },
    {
      rates: { EUR: 0.9029345372, GBP: 0.7602257336 },
      base: "USD",
      date: "2019-12-09"
    }
  ],
  pocketsReducer: {
    transactionHistory: [
      {
        id: 0,
        description: `Exchanged to EUR`,
        time: new Date().toLocaleTimeString("en-GB"),
        sourceAmount: 23,
        destinationAmount: 42,
        sourceCurrency: "USD",
        destinationCurrency: "EUR"
      }
    ],
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
    }
  },
  sourceAmount: 23,
  destinationAmount: 54,
  sourceCurrency: "USD",
  destinationCurrency: "EUR",
  error: new Error("Network disconnected"),
  slideIndex: 1,
  pocketValues: [
    {
      [fieldNames.id]: currencies.EUR.id,
      [fieldNames.currency]: currencies.EUR.value,
      [fieldNames.balance]: 300,
      [fieldNames.symbol]: "€",
      [fieldNames.description]: "Euro"
    },
    {
      [fieldNames.id]: currencies.GBP.id,
      [fieldNames.currency]: currencies.GBP.value,
      [fieldNames.balance]: 300,
      [fieldNames.symbol]: "£",
      [fieldNames.description]: "British Pound"
    },
    {
      [fieldNames.id]: currencies.USD.id,
      [fieldNames.currency]: currencies.USD.value,
      [fieldNames.balance]: 300,
      [fieldNames.symbol]: "$",
      [fieldNames.description]: "American Dollar"
    }
  ]
};
