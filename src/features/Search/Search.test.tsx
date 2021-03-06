import React from "react";
import { shallow, ShallowWrapper, mount } from "enzyme";
import Search from "./Search";
import { ButtonGroup } from "react-bootstrap";

describe("Search", () => {
  it("w-70 Search", () => {
    const wrapper = shallow(<Search searchWidth="w-70" />);
    expect(wrapper.find(".search-wrapper").hasClass("w-70")).toEqual(true);
  });
});
describe("Search", () => {
  it("w-40 Search", () => {
    const wrapper = shallow(<Search searchWidth="w-40" />);
    expect(wrapper.find(".search-wrapper").hasClass("w-40")).toEqual(true);
  });
});
