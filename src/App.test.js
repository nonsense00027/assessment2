import { render, screen } from "@testing-library/react";
import App from "./App";

test("check if submit button exist", () => {
  render(<App />);
  expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
});
