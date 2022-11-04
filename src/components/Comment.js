function Comment({ comment: potato }) {
  return (
    <div>
      <h3>{potato.user}</h3>
      <div>{potato.comment}</div>
    </div>
  );
}

export default Comment;
