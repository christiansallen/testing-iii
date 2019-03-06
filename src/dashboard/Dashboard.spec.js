import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";

describe("<Dashboard/>", () => {
  it("sees if controls component renders correctly", () => {
    const { getByTestId } = render(<Dashboard />);
    const controls = getByTestId("controls");
    expect(controls).toBeTruthy();
  });

  it("sees if display component renders correctly", () => {
    const { getByTestId } = render(<Dashboard />);
    const display = getByTestId("display");
    expect(display).toBeTruthy();
  });
});
