import { render, screen } from "@testing-library/react";
import Room from "./Room";

test("check if both select elements exist", () => {
  render(<Room data={{ adults: 1, children: 0 }} handleChange={() => {}} />);
  expect(screen.getByRole("combobox", { name: /adults/i })).toBeInTheDocument();
  expect(
    screen.getByRole("combobox", { name: /children/i })
  ).toBeInTheDocument();
});
