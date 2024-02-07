import axios from "axios";
import AddCommentsForm from "./AddCommentsForm";
import Comments from "./Comments";

import { useState, useEffect } from "react";

const App = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchComments = async () => {
      try {
        const { data } = await axios.get("/api/comments", {
          cancelToken: source.token,
        });
        setComments(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchComments();

    return () => {
      source.cancel("Canceling for some reason");
    };
  }, []);

  const handleMoreReplies = async (commentId) => {
    // fetch additional replies
    // update the state with those replies
    const { data } = await axios.get(
      `/api/comment_replies?comment_id=${commentId}`,
    );
    setComments((prevState) => {
      return prevState.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, replies: comment.replies.concat(data) };
        }
        return comment;
      });
    });
  };

  const handleSubmit = async (newComment, callback) => {
    try {
      const { data } = await axios.post("/api/comments", { ...newComment });
      setComments(comments.concat(data));
      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Comments comments={comments} onMoreReplies={handleMoreReplies} />
      <AddCommentsForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
