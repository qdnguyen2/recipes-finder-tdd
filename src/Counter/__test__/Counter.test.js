import React from "react";
import Counter from "../Counter";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<Counter /> component", () => {
  it("should render the header with correct text", () => {
    //const component = render(<Counter />);
    //const headerEle = component.getByTestId("header");
    const { getByTestId } = render(<Counter />);
    const headerEle = getByTestId("header");
    expect(headerEle.textContent).toBe("My Counter");
  });

  it("should start with text of 0", () => {
    const { getByTestId } = render(<Counter />);
    const counterElem = getByTestId("counter");

    expect(counterElem.textContent).toBe("0");
  });

  it("should contain a textbox wiwth initial value of 1", () => {
    const { getByTestId } = render(<Counter />);
    const inputElem = getByTestId("inputId");

    expect(inputElem.value).toBe("1");
  });
});
