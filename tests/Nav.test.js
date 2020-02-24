import React from "react";
import { shallow } from "enzyme";

import Nav from "../components/Nav/Nav";

describe("Check", () => {
  it("that share button is present", () => {
    const component = shallow(<Nav />);
    expect(component.contains("Share")).toBe(true);
  });

  it("that remix button is present", () => {
    const component = shallow(<Nav />);
    expect(component.contains("Remix")).toBe(true);
  });

  it("that full screen mode button is present", () => {
    const component = shallow(<Nav />);
    expect(component.contains("Full Screen Mode")).toBe(true);
  });

  it("that Beta Music Visualizer button is present", () => {
    const component = shallow(<Nav />);
    expect(component.contains("Beta Music Visualizer (Off)")).toBe(true);
  });
});
