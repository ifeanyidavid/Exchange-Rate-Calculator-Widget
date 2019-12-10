import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";
import CurrencyPocketsCarousel from ".";
import { fieldNames } from "../../constants/fields";
import { currencies } from "../../constants/currencies";

configure({ adapter: new Adapter() });

describe("CurrencyPocketsCarousel component", () => {
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
      updateSourceCurrency: jest.fn(),
      pockets,
      currency: "USD"
    };

    // wrapper instance around rendered output
    const wrapper = shallow(<CurrencyPocketsCarousel {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
