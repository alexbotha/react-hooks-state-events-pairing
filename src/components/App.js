import videoData from "../data/video.js";

import { useState } from "react";

import Video from "./Video";
import Info from "./Info";
import Likes from "./Likes";
import CommentsContainer from "./CommentsContainer.js";

function App() {
  const [show, setShow] = useState(true);
  const vanish = () => {
    setShow(!show);
  };
  return (
    <div className="App">
      <Video VideoProps={videoData} />
      <Info InfoProps={videoData} />
      <Likes upvotes={videoData.upvotes} downvotes={videoData.downvotes} />
      <button onClick={vanish}>{show ? "Hide" : "Show"} Comments</button>
      <hr />
      {show && <CommentsContainer comments={videoData.comments} />}
    </div>
  );
}

export default App;
