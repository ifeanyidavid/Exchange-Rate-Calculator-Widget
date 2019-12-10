import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";
import ExchangeCurrencyCarousel from ".";
import { fieldNames } from "../../constants/fields";
import { currencies } from "../../constants/currencies";

configure({ adapter: new Adapter() });

describe("ExchangeCurrencyCarousel component", () => {
  it("Renders correctly", () => {
    const pockets = [
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
    const props = {
      currency: "USD",
      pockets,
      name: "source",
      value: "20.40",
      onChange: jest.fn(),
      onSlide: jest.fn(),
      showExchangeRate: true,
      destinationRate: "1.456",
      recalculateOnSlide: jest.fn(),
      ratesFetched: jest.fn()
    };
    // wrapper instance around rendered output
    const wrapper = shallow(<ExchangeCurrencyCarousel {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
