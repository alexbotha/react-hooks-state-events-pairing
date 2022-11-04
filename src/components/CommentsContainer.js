import Comment from "./Comment";

function CommentsContainer({ comments }) {
  return (
    <div>
      <h2>{comments.length} Comments</h2>

      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentsContainer;
