/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddCommentsForm from "./AddCommentsForm";

test("constains h2 heading", () => {
  render(<AddCommentsForm />);
  const heading = screen.getByRole("heading", { level: 2 });
  expect(heading).toBeInTheDocument();
});

test("changes the input state when author is changed", async () => {
  const user = userEvent.setup();
  render(<AddCommentsForm />);

  // grabbing the input element
  const inputAuthor = screen.getByRole("textbox", { name: "Your Name" });

  // typing into the input
  await user.type(inputAuthor, "Srdjan");

  // performing assertion
  expect(inputAuthor).toHaveValue("Srdjan");
});

test("change the textarea state when the body changes", async () => {
  const user = userEvent.setup();
  render(<AddCommentsForm />);
  const inputBody = screen.getByRole("textbox", { name: "Your Comment" });
  await user.type(inputBody, "My Comment");

  expect(inputBody).toHaveValue("My Comment");
});
