import { render, screen } from "@testing-library/react";
import SelectAvatar from ".";

test("Check that the default avatar image is displayed", () => {
  render(<SelectAvatar />);

  const defaultAvatarImage = screen.getByAltText("avatar");
  expect(defaultAvatarImage.getAttribute("src")).toEqual(
    "/_next/image?url=%2Favatars%2Favatar-1.jpg&w=256&q=75"
  );
});
