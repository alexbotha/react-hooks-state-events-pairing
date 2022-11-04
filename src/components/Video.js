import React from "react";

function Video({ VideoProps }) {
  return (
    <iframe
      width="919"
      height="525"
      src={VideoProps.embedUrl}
      frameBorder="0"
      allowFullScreen
      title={VideoProps.title}
    />
  );
}

export default Video;
