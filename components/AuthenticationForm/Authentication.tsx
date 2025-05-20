import React, { useState } from "react";
import {
  InputContainer,
  StyledButton,
  StyledContainer,
  StyledEyeIcon,
  StyledEyeSlashIcon,
  StyledGrid,
  StyledInput,
  StyledTip,
  StyledTitle,
  TipContainer,
} from "./style";
import { IconButton, InputAdornment } from "@mui/material";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface AuthenticationForm {
  username: string;
  password: string;
}

interface Error {
  username: {
    error: boolean;
    message: string;
  };
  password: {
    error: boolean;
    message: string;
  };
}

export default function Authentication() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [user, setUser] = useState<AuthenticationForm>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<Error>({
    username: {
      error: false,
      message: "",
    },
    password: {
      error: false,
      message: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValidation()) return;

    if (isSignUp) {
      console.log("Sign Up");
    } else {
      console.log("Sign In");
    }
  };

  const inputValidation = (): boolean => {
    const usernameRegex = /^[a-zA-Z0-9]{6}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let isValid = true;
    const newError = { ...error };

    if (!usernameRegex.test(user.username)) {
      newError.username = {
        error: true,
        message:
          "Username must be exactly 6 characters long and contain only letters and digits",
      };
      isValid = false;
    }

    if (!passwordRegex.test(user.password)) {
      newError.password = {
        error: true,
        message:
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
      };
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  return (
    <StyledGrid>
      <StyledContainer>
        <StyledTitle>{isSignUp ? "Sign Up" : "Sign In"}</StyledTitle>
        <InputContainer onSubmit={handleSubmit}>
          <StyledInput
            label="Username"
            variant="standard"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          <StyledInput
            type={showPassword ? "text" : "password"}
            label="Password"
            variant="standard"
            name="password"
            value={user.password}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ marginRight: "10px" }}>
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <StyledEyeSlashIcon /> : <StyledEyeIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <HCaptcha
            sitekey={import.meta.env.VITE_CAPTCHA_SITE}
            onVerify={(token: string) => {
              console.log("Captcha token:", token);
            }}
          />
          <StyledButton type="submit">
            {isSignUp ? "Sign Up" : "Sign In"}
          </StyledButton>
          <TipContainer>
            <StyledTip>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
            </StyledTip>
            <StyledTip action={true} onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? "Sign In" : "Sign Up"}
            </StyledTip>
          </TipContainer>
        </InputContainer>
      </StyledContainer>
    </StyledGrid>
  );
}
