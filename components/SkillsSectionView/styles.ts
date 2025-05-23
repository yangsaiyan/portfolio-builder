import { Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const StyledContainer = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  height: "100%",
  backgroundColor: "transparent",
  zIndex: 1000,
  opacity: 0,
  transform: "translateY(50px)",
  animation: "slideUp 0.8s ease forwards",
  "@keyframes slideUp": {
    "0%": {
      opacity: 0,
      transform: "translateY(50px)"
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)"
    }
  }
});

export const StyledTitle = styled(Typography)({
  fontSize: "2rem",
  fontWeight: "bold",
  color: "white",
  textAlign: "center",
});
