import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import MyButton from ".";

jest.mock("next/router", () => require("next-router-mock"));

test("renders the expected text", () => {
  mockRouter.push("/initial-path");
  jest.mock("next/router", () => require("next-router-mock"));

  render(<MyButton onClick={() => router.push(href)}>Start New Game</MyButton>);

  const button = screen.getByRole("button", { name: /start new game/i });
  expect(button).toBeInTheDocument();
});
