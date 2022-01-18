import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Main from "./components/Main";

describe("counter component test", () => {
    let count, getBtn, getDbtn;


  beforeEach(() => {
      console.log("I will work before each test")
    render(<Main />);
    count = screen.getByText("0");
    getBtn = screen.getByText("Increase");
    getDbtn = screen.getByText("Decrease");
  });

  afterEach(()=>{
      console.log("I will work after each test")
  })

  beforeAll(()=>{
    console.log("I will work once at first")
  })

  afterAll(()=>{
    console.log("I will work one last time")
  })

  test("Increase test", () => {
    userEvent.click(getBtn);
    expect(count).toHaveTextContent("1");
  });
  test("Decrease test", () => {
    userEvent.click(getDbtn);
    expect(count).toHaveTextContent("-1");
  });
  
});
