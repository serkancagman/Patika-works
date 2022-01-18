import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import React from "react";

describe("Header text test", () => {
  let header;

  beforeEach(() => {
    render(<Header />);

    header = screen.getByText("Emoji Search");
  });

  test("is header there ?", () => {
    expect(header).toHaveTextContent("Emoji Search");
  });
});
