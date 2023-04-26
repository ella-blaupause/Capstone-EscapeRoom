import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/",
  }),
}));

test("link to the home page ('/').", async () => {
  render(<Navigation />);
  const homeLinks = await screen.findAllByRole("link", { name: "" });
  const hrefs = homeLinks.map((link) => link.getAttribute("href"));
  expect(hrefs).toContain("/");
});

test("link to the home page ('/profile').", async () => {
  render(<Navigation />);
  const homeLinks = await screen.findAllByRole("link", { name: "" });
  const hrefs = homeLinks.map((link) => link.getAttribute("href"));
  expect(hrefs).toContain("/profile");
});
