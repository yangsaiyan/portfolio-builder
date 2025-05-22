import { Grid, List, Typography } from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import styled from "@emotion/styled";
import { Bars3Icon, PlusIcon } from "@heroicons/react/24/outline";

export const StyledSidebarWrapper = styled(Grid)({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  width: "100%",
  height: "100vh",
  maxWidth: "300px",
});

export const StyledSidebarContainer = styled(List)<{ isOpen: boolean }>(
  ({ isOpen }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: "100vh",
    width: "100%",
    maxWidth: "300px",
    overflowY: "scroll",
    overflowX: "hidden",
    backgroundColor: "#282828",
    transition: "all 0.3s ease-in-out",
    transform: isOpen ? "translateX(0)" : "translateX(-100%)",
    zIndex: "10",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  })
);

export const StyledSidebarHeader = styled(Grid)<{ isOpen: boolean }>(
  ({ isOpen }) => ({
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "100",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "fit-content",
    backgroundColor: isOpen ? "#282828" : "transparent",
    transition: `background-color ${isOpen ? "1s" : "0s"} ease-in-out`,
  })
);

export const StyledMenuIcon = styled(Bars3Icon)<{ isRotated: boolean }>(
  ({ isRotated }) => ({
    width: "36px",
    height: "36px",
    color: "#ffffff",
    margin: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    transform: isRotated ? "rotate(180deg)" : "rotate(0deg)",
    "&:hover": {
      color: "#cccccc",
    },
  })
);

export const StyledTitle = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  color: "#ffffff",
  userSelect: "none",
});

export const StyledSectionContainer = styled(TransitionGroup)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  width: "100%",
  maxWidth: "280px",
  height: "fit-content",
  gap: "15px",
  marginTop: "100px",
  padding: "10px",
});

export const StyledSectionTextContainer = styled(Grid)<{ active: boolean }>(({ active }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  padding: "10px",
  borderRadius: "10px",
  cursor: "pointer",
  backgroundColor: active ? "#333333" : "transparent",

  "&:hover": {
    backgroundColor: "#333333",
  },
}));

export const StyledSectionText = styled(Typography)({
  fontSize: "16px",
  fontWeight: "bold",
  color: "#ffffff",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textTransform: "capitalize",
  maxWidth: "100%",
  userSelect: "none",
});

export const StyledPlusIconContainer = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "fit-content",
});

export const StyledPlusIcon = styled(PlusIcon)({
  width: "24px",
  height: "24px",
  color: "#ffffff",
  cursor: "pointer",
  "&:hover": {
    color: "#cccccc",
  },
});
