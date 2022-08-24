import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greets renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});
