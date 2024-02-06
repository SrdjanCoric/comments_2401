import Comment from "./Comment";

const CommentThread = ({ comment }) => {
  return (
    <div className="parent-comment">
      <Comment {...comment} />
      <div className="replies">
        <Comment {...comment} />
        <a href="#" className="show_more">
          Show More Replies (2)
        </a>
      </div>
    </div>
  );
};

export default CommentThread;
