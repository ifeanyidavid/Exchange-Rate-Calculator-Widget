import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import ExchangeButton from ".";

configure({ adapter: new Adapter() });

let [setExchangeOpenState] = new Array(1).fill(jest.fn(() => true));

describe("<ExchangeButton />", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      setExchangeOpenState: setExchangeOpenState
    };
    const exchangeButtonWrapper = shallow(<ExchangeButton {...props} />);

    wrapper = exchangeButtonWrapper;
  });

  it("should call setExchangeOpenState function onClick", () => {
    wrapper.find("button").simulate("click");
    expect(setExchangeOpenState).toHaveBeenCalledTimes(1);
  });
});
