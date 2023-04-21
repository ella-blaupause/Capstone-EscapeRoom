import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/",
  }),
}));

test("link to the home page ('/').", async () => {
  render(<Navigation />);
  const link = await screen.findByRole("link", { name: "" });
  expect(link).toHaveAttribute("href", "/");
});
