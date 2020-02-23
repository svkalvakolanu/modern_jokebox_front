import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import Index from "../pages/index.js";

describe("With Enzyme", () => {
  it('Index Renders Identity', () => {
    const app = mount(<Index />);

    expect(app.find("h1").text()).toEqual("Vibr");
  });
});

describe("With Snapshot Testing", () => {
  it('App shows "Hello, Sunshine!"', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
