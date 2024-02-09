import { useState } from "react";

const AddCommentsForm = ({ onSubmit }) => {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { author, body };
    onSubmit(newComment, reset);
  };
  const reset = () => {
    setAuthor("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} action="">
      <h2>Post a Comment</h2>
      <div className="input-group">
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          name="author"
          value={author}
        />
      </div>

      <div className="input-group">
        <label htmlFor="body">Your Comment</label>
        <textarea
          id="body"
          name="body"
          cols="30"
          onChange={(e) => setBody(e.target.value)}
          rows="10"
          value={body}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddCommentsForm;
