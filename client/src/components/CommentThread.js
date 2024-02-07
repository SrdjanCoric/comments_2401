import Comment from "./Comment";

const CommentThread = ({ comment, onMoreReplies }) => {
  return (
    <div className="parent-comment">
      <Comment {...comment} />
      <div className="replies">
        {comment.replies.map((reply) => (
          <Comment key={reply.id} {...reply} />
        ))}
        {comment.replies_count === comment.replies.length ? null : (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onMoreReplies(comment.id);
            }}
            className="show_more"
          >
            Show More Replies ({comment.replies_count - 1})
          </a>
        )}
      </div>
    </div>
  );
};

export default CommentThread;
