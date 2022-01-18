import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import React from "react";
import App from "./App";

describe("Result Test", () => {
  let input, result, smiles;

  beforeEach(() => {
    render(<App />);

    input = screen.getByPlaceholderText("search emoji");
    result = screen.getByText("100");
  });

  test(" input test", () => {
    const forTitle = "100";
    userEvent.type(input, forTitle);
    expect(result).toBeInTheDocument();
  });
});
