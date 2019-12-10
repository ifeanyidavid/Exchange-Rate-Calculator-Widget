import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";
import DateComponent from ".";

configure({ adapter: new Adapter() });

describe("DateComponent component", () => {
  it("Renders correctly", () => {
    // wrapper instance around rendered output
    const wrapper = shallow(<DateComponent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
