import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import ExchangeTopBar from ".";

configure({ adapter: new Adapter() });

let [setExchangeOpenState] = new Array(1).fill(jest.fn(() => true));

describe("<ExchangeTopBar />", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      sourceRate: "1.343",
      disableExchangeButton: jest.fn(),
      exhchangeCurrency: jest.fn(),
      setExchangeOpenState: setExchangeOpenState
    };
    const exchangeButtonWrapper = shallow(<ExchangeTopBar {...props} />);

    wrapper = exchangeButtonWrapper;
  });

  it("should call setExchangeOpenState function onClick", () => {
    wrapper.find(".cancel").simulate("click");
    expect(setExchangeOpenState).toHaveBeenCalledTimes(1);
  });
});
