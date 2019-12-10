import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";
import { currencies } from "../../constants/currencies";
import { fieldNames } from "../../constants/fields";
import Pocket from "../Pocket";
import { testData } from "../../constants/testData";

configure({ adapter: new Adapter() });

let [updateSourceCurrency, setExchangeOpenState] = new Array(2).fill(jest.fn());

function shallowSetup() {
  const pockets = testData.pocketValues;

  const transactionHistory = testData.pocketsReducer.transactionHistory;

  // sample props to pass to shallow render

  const props = {
    setExchangeOpenState: setExchangeOpenState,
    updateSourceCurrency: updateSourceCurrency,
    sourceCurrency: "EUR",
    pockets: pockets,
    transactionHistory: transactionHistory
  };

  // wrapper instance around rendered output
  const pocketEnzymeWrapper = shallow(<Pocket {...props} />);

  return { props, pocketEnzymeWrapper };
}

describe("Pockets component", () => {
  it("Renders correctly", () => {
    const { pocketEnzymeWrapper } = shallowSetup();
    expect(toJson(pocketEnzymeWrapper)).toMatchSnapshot();
  });
});
