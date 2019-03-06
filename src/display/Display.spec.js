import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";

describe("<Display/>", () => {
  it("should show open/close depending on text content", () => {
    const { getByTestId } = render(<Display />);

    const closed = getByTestId("closed").textContent;

    expect(closed).toBe("Open");
  });
  it("should show locked/unlocked depending on text content", () => {
    const { getByTestId } = render(<Display />);

    const locked = getByTestId("locked").textContent;

    expect(locked).toBe("Unlocked");
  });

  it("should show green-led class if closed is false", () => {
    const { getByTestId } = render(<Display />);

    const closed = getByTestId("closed").className;

    expect(closed).toContain("green-led");
  });

  it("should show green-led class if locked is false", () => {
    const { getByTestId } = render(<Display />);

    const locked = getByTestId("locked").className;

    expect(locked).toContain("green-led");
  });
});
