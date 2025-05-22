import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

export const StyledAddSectionPopupContainer = styled(Dialog)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  width: "100%",
  height: "100%",

  "& .MuiDialog-paper": {
    width: "100%",
    height: "100%",
    maxWidth: "500px",
    maxHeight: "fit-content",

    backgroundColor: "#101010",
  },
});

export const StyledAddSectionPopupContent = styled(DialogContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

export const StyledAddSectionPopupTitle = styled(DialogTitle)({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#ffffff",
});

export const StyledAddSectionPopupActions = styled(DialogActions)({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
});

export const StyledAddSectionPopupInput = styled(TextField)({
  width: "100%",
  marginBottom: "20px",

  "& .MuiInputBase-root": {

    "& .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #ffffff",

        "&:focus": {
            border: "1px solid #ffffff",
        },
    },
  },

  "& .MuiInputBase-input": {
    color: "#ffffff",
    
  },
});

export const StyledAddSectionPopupButton = styled(Button)({
  width: "fit-content",
  height: "50px",
  padding: "20px",
  borderRadius: "24px",
  backgroundColor: "#000000",
  textTransform: "none",
  color: "#ffffff",
});

export const StyledSuggestionWrapper = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  gap: "10px",
})

export const StyledSuggestionContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  gap: "10px",
  width: "100%",
})

export const StyledSuggestionText = styled(Typography)({
  fontSize: "16px",
  fontWeight: "bold",
  color: "#ffffff",
})

export const StyledSuggestionButton = styled(Button)({

    padding: "5px 20px",
    color: "#ffffff",
    textTransform: "capitalize",
    border: "1px solid #ffffff",
    borderRadius: "24px",
})