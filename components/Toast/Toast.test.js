import { render, screen } from "@testing-library/react";
import Toast from ".";
import useGlobalStore from "../../store";

test("each toast's emoji, title are displayed correctly.", async () => {
  const toasts = [
    { id: 1, emoji: "🍞", title: "Toast 1", borderColor: "red" },
    { id: 2, emoji: "🍳", title: "Toast 2", borderColor: "blue" },
    { id: 3, emoji: "🥓", title: "Toast 3", borderColor: "green" },
  ];
  useGlobalStore.setState({ toasts });

  render(<Toast />);

  // Verify that each toast's emoji, title are displayed correctly
  toasts.forEach((toast) => {
    const toastEmoji = screen.getByText(toast.emoji);
    const toastTitle = screen.getByText(toast.title);

    expect(toastEmoji).toBeInTheDocument();
    expect(toastTitle).toBeInTheDocument();
  });
});
