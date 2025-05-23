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

export const StyledImage = styled("img")({
  position: "relative",
  objectFit: "cover",
  maxWidth: "clamp(300px, 70%, 700px)",
  maxHeight: "clamp(300px, 70%, 700px)",
  userSelect: "none",
});

export const StyledContentContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "fit-content",
  height: "fit-content",
});

export const StyledTextContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
  height: "fit-content",
  padding: "2rem",
});

export const StyledName = styled(Typography)({
  fontSize: "2rem",
  fontWeight: "bold",
  color: "white",
  textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
});

export const StyledDescription = styled(Typography)({
  fontSize: "1rem",
  color: "white",
  textWrap: "wrap",
  textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
  maxWidth: "500px",
});

export const StyledExternalLinksContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
  padding: "2rem",
  flexWrap: "wrap",
});

export const StyledExternalLink = styled("a")({
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)"
  }
});

export const StyledExternalLinkImage = styled("img")({
  width: "4rem",
  height: "4rem",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)"
  }
});
