import {
  pocketValues,
  getDestinationConversionRates,
  getRates,
  getDestinationCurrency,
  getSourceConversionRates,
  getSourceCurrency,
  getTransactionHistory
} from "./index";
import { currencies } from "../../constants/currencies";
import { fieldNames } from "../../constants/fields";
import { testData } from "../../constants/testData";

/* POCKETS SELECTORS TEST CASES */
describe("Pocket selectors", () => {
  it("should return a list of all wallets", () => {
    const state = {
      pocketsReducer: {
        pockets: testData.pocketsReducer.pockets
      }
    };

    const expectedResult = [
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
    ];

    expect(pocketValues(state)).toStrictEqual(expectedResult);
  });

  it("should return the transaction history", () => {
    const state = { pocketsReducer: testData.pocketsReducer };

    const expectedResult = [
      {
        id: 0,
        description: `Exchanged to EUR`,
        time: new Date().toLocaleTimeString("en-GB"),
        sourceAmount: 23,
        destinationAmount: 42,
        sourceCurrency: "USD",
        destinationCurrency: "EUR"
      }
    ];

    expect(getTransactionHistory(state)).toStrictEqual(expectedResult);
  });
});

/* RATES SELECTORS TEST CASES */

describe("Rates selectors", () => {
  it("should return the source currency", () => {
    const state = { ratesReducer: { [fieldNames.sourceCurrency]: "EUR" } };
    expect(getSourceCurrency(state)).toBe("EUR");
  });

  it("should return the destination currency", () => {
    const state = { ratesReducer: { [fieldNames.destinationCurrency]: "USD" } };
    expect(getDestinationCurrency(state)).toBe("USD");
  });

  it("should return the rates", () => {
    const state = {
      ratesReducer: {
        [fieldNames.rates]: testData.rates
      }
    };
    const expectedResult = [
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
    ];

    expect(getRates(state)).toStrictEqual(expectedResult);
  });

  it("should return source currency conversion rates", () => {
    const state = {
      ratesReducer: {
        [fieldNames.rates]: testData.rates,
        [fieldNames.sourceCurrency]: "EUR",
        [fieldNames.destinationCurrency]: "USD"
      }
    };

    expect(getSourceConversionRates(state)).toBe(1.1075);
  });

  it("should return destination currency conversion rates", () => {
    const state = {
      ratesReducer: {
        [fieldNames.rates]: testData.rates,
        [fieldNames.sourceCurrency]: "GBP",
        [fieldNames.destinationCurrency]: "EUR"
      }
    };

    expect(getDestinationConversionRates(state)).toBe(0.84195);
  });
});
