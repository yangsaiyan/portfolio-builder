import { Button, Grid, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { TrashIcon } from "@heroicons/react/24/outline";

export const StyledEditFormWrapper = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",

  backgroundColor: "#343434",
});

export const StyledEditFormContainer = styled(Grid)({
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  maxWidth: "90%",
  maxHeight: "80%",
  borderRadius: "10px",
  border: "1px solid rgb(255, 255, 255)",
  backgroundColor: "#282828",
  overflowY: "scroll",
  padding: "30px 50px",

  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const StyledHeaderText = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  color: "#ffffff",
  textTransform: "capitalize",
});

export const StyledTextField = styled(TextField)({
  width: "100%",

  backgroundColor: "rgba(136, 136, 136, 0.3)",

  "& .MuiFormLabel-root": {
    color: "#ffffff",
    textTransform: "capitalize",
  },

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

export const StyledDeleteButton = styled(TrashIcon)({
  color: "#ffffff",
  width: "20px",
  height: "20px",
  cursor: "pointer",
});

export const StyledContainer = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  gap: "10px",
});

export const StyledHeaderContainer = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  gap: "10px",
})

export const StyledHeaderCTAContainer = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: "100%",
  gap: "10px",
})

export const StyledHeaderCTAButton = styled(Button)({
  backgroundColor: "#000000",
  color: "#ffffff",
  borderRadius: "5px",
  padding: "5px 10px",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "capitalize",
})