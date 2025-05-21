import React, { useState } from "react";
import {
  InputContainer,
  StyledButton,
  StyledContainer,
  StyledEyeIcon,
  StyledEyeSlashIcon,
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
  captcha: {
    error: boolean;
    message: string;
  };
}

export default function Authentication() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [captchaToken, setCaptchaToken] = useState<string>("");
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
    captcha: {
      error: false,
      message: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = inputValidation(user, captchaToken);
    if (!isValid) return;

    if (isSignUp) {
      console.log("Sign Up");
    } else {
      console.log("Sign In");
    }
  };

  const inputValidation = (
    user: AuthenticationForm,
    captchaToken: string
  ): boolean => {
    const usernameRegex = /^[a-zA-Z0-9]{6,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!user.username || user.username.trim() === "") {
      setError((prevError) => ({
        ...prevError,
        username: {
          error: true,
          message: "Username is required",
        },
      }));
      return false;
    }

    if (!user.password || user.password.trim() === "") {
      setError((prevError) => ({
        ...prevError,
        password: {
          error: true,
          message: "Password is required",
        },
      }));

      if (!usernameRegex.test(user.username.trim())) {
        setError((prevError) => ({
          ...prevError,
          username: {
            error: true,
            message:
              "Invalid username - must be at least 6 characters long and contain only letters and numbers",
          },
        }));
      }
      return false;
    }

    if (!passwordRegex.test(user.password.trim())) {
      setError((prevError) => ({
        ...prevError,
        password: {
          error: true,
          message:
            "Invalid password - must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
        },
      }));
      return false;
    }

    if (!captchaToken || captchaToken.trim() === "") {
      setError((prevError) => ({
        ...prevError,
        captcha: {
          error: true,
          message: "Captcha is required - please verify you are human",
        },
      }));
      return false;
    }

    console.log(error);

    return true;
  };

  return (
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
          onVerify={(token) => {
            setCaptchaToken(token);
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
  );
}
