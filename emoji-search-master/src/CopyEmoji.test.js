import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import React from "react";
import App from "./App";

describe("is copied ?", () => {
  test("try copy", () => {
    render(<App />);
    const copyBtn = screen.getAllByText("Click to copy emoji");
    const input = screen.getByPlaceholderText("search emoji");
   userEvent.click(copyBtn[0]);
    userEvent.paste(input, window.ClipboardItem);
    expect(input).toHaveValue(copied);
  });
});
