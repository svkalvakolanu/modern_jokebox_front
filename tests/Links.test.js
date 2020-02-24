import React from "react";
import { shallow } from "enzyme";

import Links from "../components/Links/Links";

describe("Check", () => {
  it("Should contain an apple image", () => {
    const component = shallow(<Links />);
    expect(component.find("")).toBe(true);
  });

  
});
