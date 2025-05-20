import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const StyledGrid = styled(Grid)({
  width: "100%",
  height: "100vh",
  position: "relative",
  overflow: "hidden",

  backgroundColor: "#000000",
  backgroundImage: "linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(20, 20, 20, 1) 100%);",

  "& canvas": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  }
});
