import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";
import CurrencyExchange from "./CurrencyExchange";
import { testData } from "../../constants/testData";

configure({ adapter: new Adapter() });

let [
  setExchangeOpenState,
  updateSourceCurrencySlide,
  updateDestinationCurrencySlide,
  doExchangeCurrency
] = new Array(4).fill(jest.fn());

function shallowSetup() {
  const pockets = testData.pocketValues;

  const transactionHistory = testData.pocketsReducer.transactionHistory;

  const mainPockets = testData.pocketsReducer.pockets;

  const rates = testData.rates;

  // sample props to pass to shallow render

  const props = {
    setExchangeOpenState: setExchangeOpenState,
    sourceCurrency: "EUR",
    destinationCurrency: "USD",
    pockets,
    rates,
    updateSourceCurrencySlide: updateSourceCurrencySlide,
    updateDestinationCurrencySlide: updateDestinationCurrencySlide,
    sourceConversionRates: 1,
    destinationConversionRates: 2,
    doExchangeCurrency: doExchangeCurrency,
    mainPockets,
    transactionHistory: transactionHistory
  };

  // wrapper instance around rendered output
  const currencyExchangeEnzymeWrapper = shallow(
    <CurrencyExchange {...props} />
  );

  return { props, currencyExchangeEnzymeWrapper };
}

describe("Currency exchange component", () => {
  it("Renders correctly", () => {
    const { currencyExchangeEnzymeWrapper } = shallowSetup();
    expect(toJson(currencyExchangeEnzymeWrapper)).toMatchSnapshot();
  });
});
