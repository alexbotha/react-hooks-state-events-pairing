import { useState } from "react";

function Likes({ upvotes, downvotes }) {
  const [upNumber, SetUpNumber] = useState(upvotes, downvotes);
  const [downNumber, SetDownNumber] = useState(downvotes);

  // const addOneToUp = () => {
  //   SetUpNumber(upNumber + 1);
  // };

  // const AddDown = () => {
  //   SetDownNumber(downNumber + 1);
  // };

  const changeNumber = (x = true) => {
    if (x) {
      SetUpNumber(upNumber + 1);
    } else {
      SetDownNumber(downNumber + 1);
    }
  };

  return (
    <p>
      <button onClick={() => changeNumber()}>{upNumber}👍</button>
      <button onClick={() => changeNumber(false)}>{downNumber}👎</button>
    </p>
  );
}

export default Likes;
