import axios from "axios";

export const getComments = async () => {
  const { data } = await axios.get("/api/comments");
  return data;
  // [comment1, comment2]
};

export const getMoreReplies = async (commentId) => {
  const { data } = await axios.get(
    `/api/comment_replies?comment_id=${commentId}`,
  );
  return data;
};

export const createComment = async (newComment) => {
  const { data } = await axios.post("/api/comments", { ...newComment });
  return data;
};
