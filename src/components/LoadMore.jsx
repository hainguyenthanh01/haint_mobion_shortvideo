import { CircularProgress } from "@mui/material";
import React from "react";
function LoadMore() {
  return (
    <div
      style={{
        width: "100%",
        margin: "20px 0 50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="inherit" />
    </div>
  );
}

export default LoadMore;
