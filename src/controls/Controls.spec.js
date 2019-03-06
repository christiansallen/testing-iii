import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import Controls from "./Controls";

describe("<Controls/>", () => {
  it("checks if toggle closed button triggers when clicked", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(<Controls onClick={mockCallback} />);
    const closeButton = getByTestId("close-button");
    fireEvent.click(closeButton);
    expect(mockCallback).toHaveBeenCalled();
  });

  it("checks if toggle locked button triggers when clicked", () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(<Controls onClick={mockCallback} />);
    const lockButton = getByTestId("lock-button");
    fireEvent.click(lockButton);
    expect(mockCallback).toHaveBeenCalled();
  });

  it("checks if toggle door button changes text to Open Gate/Close Gate", () => {
    const { getByTestId } = render(<Controls />);
    const gate = getByTestId("close-button").textContent;
    expect(gate).toBe("Close Gate");
  });

  it("checks if closed toggle button is disabled when gate is closed", () => {
    const { getByTestId } = render(<Controls />);
    const closedToggle = getByTestId("close-button").disabled;
    expect(closedToggle).toBeFalsy();
  });

  it("checks if locked toggle button is disabled when gate is open", () => {
    const { getByTestId } = render(<Controls />);
    const lockToggle = getByTestId("lock-button").disabled;
    expect(lockToggle).toBeTruthy();
  });
});
