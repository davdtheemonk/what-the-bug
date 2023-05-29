import React from "react";

export default function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img style={{ width: "70px" }} src="/load.svg"></img>
    </div>
  );
}
