import { render, screen } from "@testing-library/react";
import Room from "./Room";

test("on initial render, the select option is disabled", () => {
  render(<Room data={{ adults: 1, children: 0 }} handleChange={() => {}} />);
  expect(screen.getByRole("combobox", { name: /adults/i })).toBeInTheDocument();
  expect(
    screen.getByRole("combobox", { name: /children/i })
  ).toBeInTheDocument();
});
