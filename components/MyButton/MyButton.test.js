import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MyButton from ".";

test("renders the expected text.", async () => {
  const buttonText = "Click me!";
  const { getByText } = render(<MyButton>{buttonText}</MyButton>);
  const buttonElement = getByText(buttonText);
  expect(buttonElement).toBeInTheDocument();
});

test("calls the onNewGame callback when clicked.", async () => {
  const onNewGameMock = jest.fn();
  const { getByRole } = render(
    <MyButton onNewGame={onNewGameMock}>Click me!</MyButton>
  );
  const buttonElement = getByRole("button");
  await userEvent.click(buttonElement);
  expect(onNewGameMock).toHaveBeenCalled();
});
