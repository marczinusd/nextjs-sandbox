import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Bears } from "./Bears";

describe("<Bears />", () => {
  it("should render", () => {
    render(<Bears />);
  });

  it("should increase the number of bears when increase button is pressed", async () => {
    render(<Bears />);

    await screen.findByText<HTMLButtonElement>("MOAR BEARS").then((button) => {
      act(() => button.click());
    });

    expect(screen.getByText(/Number of bears: 1/i)).toBeInTheDocument();
  });
});
