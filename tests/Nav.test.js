import React from "react";
import { shallow } from "enzyme";

import Nav from "../components/Nav/Nav"

describe("Check", () => {
  it('Index Renders Identity', () => {
    const component = shallow(<Nav />);

     expect(component.contains("Share")).toBe(true);
  });
});