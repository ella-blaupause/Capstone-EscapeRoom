import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MyButton from ".";
import { useRouter } from "next/router";

test("renders the expected text.", () => {
  const buttonText = "Click me!";
  const { getByText } = render(<MyButton>{buttonText}</MyButton>);
  const buttonElement = getByText(buttonText);
  expect(buttonElement).toBeInTheDocument();
});

test("clicking the button calls the handleNewGame function and redirects to /room", async () => {
  const router = useRouter();

  const pushMock = jest.fn();

  const { getByText } = render(<MyButton>Start New Game</MyButton>);

  await userEvent.click(getByText("Start New Game"));

  expect(handleNewGame).toHaveBeenCalledTimes(1);
  expect(pushMock).toHaveBeenCalledWith("/room");

  useRouterMock.mockRestore();
});
