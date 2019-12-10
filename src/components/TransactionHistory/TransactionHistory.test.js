import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";
import TransactionHistory from ".";

configure({ adapter: new Adapter() });

describe("TransactionHistory component", () => {
  it("Renders correctly", () => {
    const transactionHistory = [
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
    const props = {
      transactionHistory
    };
    // wrapper instance around rendered output
    const wrapper = shallow(<TransactionHistory {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
