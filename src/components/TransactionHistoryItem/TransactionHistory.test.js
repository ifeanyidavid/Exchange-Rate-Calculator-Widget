import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";
import TransactionHistoryItem from ".";

configure({ adapter: new Adapter() });

describe("TransactionHistoryItem component", () => {
  it("Renders correctly", () => {
    const history = {
      id: 0,
      description: `Exchanged to EUR`,
      time: new Date().toLocaleTimeString("en-GB"),
      sourceAmount: 23,
      destinationAmount: 42,
      sourceCurrency: "USD",
      destinationCurrency: "EUR"
    };
    const props = {
      history,
      marginBottom: "mb-2"
    };
    // wrapper instance around rendered output
    const wrapper = shallow(<TransactionHistoryItem {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
