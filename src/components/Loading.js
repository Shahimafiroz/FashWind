import React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

function Loading() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "5%" }}>
      <Stack
        sx={{ color: "#20170C", padding: "1rem" }}
        spacing={4}
        direction="row"
      >
        <CircularProgress color="inherit" />
      </Stack>
      <Stack
        sx={{ color: "#7C0000", padding: "1rem" }}
        spacing={4}
        direction="row"
      >
        <CircularProgress color="inherit" />
      </Stack>
      <Stack
        sx={{ color: "#1A4941", padding: "1rem" }}
        spacing={4}
        direction="row"
      >
        <CircularProgress color="inherit" />
      </Stack>
    </div>
  );
}

export default Loading;

//1A4941
