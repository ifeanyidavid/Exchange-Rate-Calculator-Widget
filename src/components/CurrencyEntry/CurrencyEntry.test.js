import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";
import CurrencyEntry from ".";

configure({ adapter: new Adapter() });

describe("CurrencyEntry component", () => {
  it("Renders correctly", () => {
    const props = {
      name: "source",
      onChange: jest.fn(),
      value: "1.1",
      balance: 300.0,
      currency: "USD",
      symbol: "$",
      showExchangeRate: true,
      destinationRate: "1.12",
      ratesFetched: jest.fn()
    };

    // wrapper instance around rendered output
    const wrapper = shallow(<CurrencyEntry {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
