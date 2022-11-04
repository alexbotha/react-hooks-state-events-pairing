import React from "react";

function Info({ InfoProps }) {
  return (
    <React.Fragment>
      <h2>{InfoProps.title}</h2>
      <p>
        <p>
          {InfoProps.views} Views | Uploaded {InfoProps.createdAt}
        </p>
      </p>
    </React.Fragment>
  );
}

export default Info;
