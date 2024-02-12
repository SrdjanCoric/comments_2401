/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { getComments, getMoreReplies } from "../services/comments";
import userEvent from "@testing-library/user-event";
import App from "./App";

jest.mock("../services/comments.js");

afterEach(() => {
  jest.resetAllMocks();
});

const mockCommentsData = [
  {
    id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
    author: "Reed Fisher",
    body: "Sint in in sunt amet.",
    postedAt: 1550488214207,
    replies_count: 2,
    replies: [
      {
        id: "116dbd01-d5f3-4dfb-afeb-f822a9264a5e",
        comment_id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
        author: "Kathleen Nikolaus",
        body: "Officia suscipit sint sint impedit nemo. Labore aut et quia quasi ut. Eos voluptatibus quidem eius delectus beatae excepturi.",
        postedAt: 1550419941546,
      },
    ],
  },
];

const moreReplies = [
  {
    id: "1d549a1b-4db1-4c10-9941-60c3a0c111cb",
    comment_id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
    author: "Sean Bechtelar",
    body: "Quam ea est provident enim necessitatibus. Sint veniam sed iusto omnis eaque dolores voluptas omnis ipsa. Vero cupiditate corrupti amet.",
    postedAt: 1550434979501,
  },
];

test("it contains h3 with the text of author name", async () => {
  getComments.mockResolvedValue(mockCommentsData);
  render(<App />);
  const authorHeading = await screen.findByRole("heading", {
    level: 3,
    name: "Reed Fisher",
  });
  expect(authorHeading).toBeInTheDocument();
});

test("when I click more replies reply author appears on the screen", async () => {
  getComments.mockResolvedValue(mockCommentsData);
  getMoreReplies.mockResolvedValue(moreReplies);
  render(<App />);
  const link = await screen.findByRole("link", { name: /Show More Replies/ });
  const user = userEvent.setup();
  await user.click(link);

  const replyAuthor = await screen.findByRole("heading", {
    level: 3,
    name: "Sean Bechtelar",
  });
  expect(replyAuthor).toBeInTheDocument();
  expect(link).not.toBeInTheDocument();
});

// test("it contains heading level 1 with user Terry", async () => {
//   render(<App />);
//   const userHeading = await screen.findByRole("heading", {
//     level: 1,
//     name: "Terry",
//   });
//   expect(userHeading).toBeInTheDocument();
// });
// findByRole -> waitFor + getBy
