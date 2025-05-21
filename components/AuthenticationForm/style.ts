import styled from "@emotion/styled";
import { ButtonBase, Grid, TextField, Typography } from "@mui/material";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export const StyledContainer = styled(Grid)({

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    maxWidth: "720px",
    maxHeight: "420px",
    padding: "30px 20px 30px 20px",
    margin: "30px",

    backgroundColor: "#282828",
    boxShadow: "0px 0px 100px 10px rgba(28,28,28,1)",
    borderRadius: "24px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
})

export const StyledTitle = styled(Typography)({

    fontSize: "24px",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
})

export const InputContainer = styled("form")({

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    width: "100%",
    height: "100%",
})

export const StyledInput = styled(TextField)({

    width: "100%",
    height: "100%",
    maxWidth: "320px",
    maxHeight: "50px",


    "& .MuiInput-root": {
        "&:before": {
            borderBottom: "1px solid #FFFFFF",
        },

        "&:after": {
            borderBottom: "1px solid #000000",
        },
    },

    "& .MuiFormLabel-root": {
        color: "#FFFFFF",

        "&.Mui-focused": {
            color: "#FFFFFF",
        },
    },

    "& .MuiInputBase-input": {
        color: "#FFFFFF",
    },
})

export const StyledButton = styled(ButtonBase)({
    width: "100%",
    height: "100%",
    maxWidth: "320px",
    maxHeight: "50px",

    color: "#000000",
    fontSize: "20px",
    fontWeight: "bold",
    
    borderRadius: "24px",
    backgroundColor: "#FFFFFF",

    transition: "all 0.3s ease",

    "&:hover": {
        backgroundColor: "#DDDDDD",
        boxShadow: "0px 10px 10px rgba(255, 255, 255, 0.1)",
        transform: "translateY(-2px)",
    },
})

export const TipContainer = styled(Grid)({

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    width: "100%",
    height: "fit-content",
    
})

export const StyledTip = styled(Typography)<{action?: boolean}>(({action})=>({

    fontSize: "12px",
    color: "#FFFFFF",
    textAlign: "center",

    ...(action && {
        cursor: "pointer",
        textDecoration: "underline",
        "&:hover": {
            color: "#DDDDDD",
        },
    }),
}))

export const StyledEyeIcon = styled(EyeIcon)({
    color: "#FFFFFF",
    width: "20px",
    height: "20px",
})

export const StyledEyeSlashIcon = styled(EyeSlashIcon)({
    color: "#FFFFFF",
    width: "20px",
    height: "20px",
})