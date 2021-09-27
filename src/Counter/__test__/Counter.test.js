import React from "react";
import Counter from "../Counter";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<Counter /> component", () => {
  it("should render the header with correct text", () => {
    //const component = render(<Counter />);
    //const headerEle = component.getByTestId("header");
    const { getByTestId } = render(<Counter />);
    const headerEle = getByTestId("headerId");
    expect(headerEle.textContent).toBe("My Counter");
  });

  it("should start with text of 0", () => {
    const { getByTestId } = render(<Counter />);
    const counterElem = getByTestId("counterId");

    expect(counterElem.textContent).toBe("0");
  });

  it("should contain a textbox with initial value of 1", () => {
    const { getByTestId } = render(<Counter />);
    const inputElem = getByTestId("inputId");

    expect(inputElem.value).toBe("1");
  });

  it("should render add button with '+' sign", () => {
    const { getByTestId } = render(<Counter />);
    const addBtnElem = getByTestId("addBtnId");

    expect(addBtnElem.textContent).toBe("+");
  });

  it("should render minus button with '-' sign", () => {
    const { getByTestId } = render(<Counter />);
    const subtractBtnElem = getByTestId("subtractBtnId");

    expect(subtractBtnElem.textContent).toBe("-");
  });
});
