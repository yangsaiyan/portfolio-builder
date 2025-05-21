import styled from "@emotion/styled";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import {
  PencilSquareIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";

export const StyledContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  maxWidth: "720px",
  maxHeight: "420px",
  padding: "10px 20px 30px 20px",
  margin: "30px",

  backgroundColor: "#282828",
  boxShadow: "0px 0px 100px 10px rgba(28, 28, 28, 0.5)",
  borderRadius: "24px",
  border: "2px solid rgb(255, 255, 255)",
});

export const StyledCardContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  gap: "25px",
});

export const StyledTitleContainer = styled(Grid)({
  display: "flex",
  width: "100%",
  height: "fit-content",
  paddingLeft: "20px",
  marginBottom: "10px",
});

export const StyledTitle = styled(Typography)({
  fontSize: "48px",
  fontWeight: "bold",
  color: "#ffffff",
});

export const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  position: "relative",
  transition: "transform 0.6s ease",
  backgroundColor: "#48484848",
  borderRadius: "24px",
  boxShadow: "0px 0px 50px 0px rgba(255, 255, 255, 0.05) inset",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

export const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  width: "100%",
  height: "100%",
  paddingLeft: "40px",
});

export const StyledCardTitle = styled(Typography)({
  fontSize: "48px",
  fontWeight: "bold",
  color: "#ffffff",
});

export const StyledCardDescription = styled(Typography)({
  fontSize: "24px",
  color: "#ffffff",
});

export const StyledPencilSquareIcon = styled(PencilSquareIcon)({
  width: "96px",
  height: "96px",
  color: "#ffffff",
});

export const StyledDocumentCheckIcon = styled(DocumentCheckIcon)({
  width: "96px",
  height: "96px",
  color: "#ffffff",
});
