import {
  createComment,
  getComments,
  getMoreReplies,
} from "../services/comments";
import AddCommentsForm from "./AddCommentsForm";
import Comments from "./Comments";

import { useState, useEffect } from "react";
import FourOhFour from "./FourOhFour";

const App = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getComments();
        setComments(data);
      } catch (e) {
        setError(true);
      }
    };
    fetchComments();
  }, []);

  const handleMoreReplies = async (commentId) => {
    try {
      const data = await getMoreReplies(commentId);

      setComments((prevState) => {
        return prevState.map((comment) => {
          if (comment.id === commentId) {
            return { ...comment, replies: comment.replies.concat(data) };
          }
          return comment;
        });
      });
    } catch (e) {
      setError(true);
    }
  };

  const handleSubmit = async (newComment, callback) => {
    try {
      const data = await createComment(newComment);
      setComments(comments.concat(data));
      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  return error ? (
    <FourOhFour />
  ) : (
    <div>
      <Comments comments={comments} onMoreReplies={handleMoreReplies} />
      <AddCommentsForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
