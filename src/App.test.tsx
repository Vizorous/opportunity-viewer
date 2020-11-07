import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Routes from "./routes/Routes";

it("Render without crashes", () => {
  // when
  const component = shallow(<App />);
  // then
  expect(component.getElements()).toMatchSnapshot();
});
it("Contains Routes", () => {
  // when
  const component = shallow(<App />);
  // then
  expect(component.contains(<Routes></Routes>)).toBe(true);
});
// it("renders Account header", () => {
//   const wrapper = shallow(<App />);
//   const welcome = <h1>Display Active Users Account Details</h1>;
//   expect(wrapper.contains(welcome)).toEqual(true);
// });
