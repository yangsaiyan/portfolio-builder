import React, { useState, useEffect, useCallback } from "react";
import type { RootState } from "../../redux/store";
import {
  StyledDeleteButton,
  StyledEditFormContainer,
  StyledEditFormWrapper,
  StyledHeaderText,
  StyledTextField,
} from "./style";
import { Grid } from "@mui/material";
import { updateUser } from "../../redux/user/reducer";
import { useDispatch } from "react-redux";
import { StyledContainer } from "./style";
import debounce from "lodash/debounce";

type User = RootState["user"];

interface SectionItem {
  name: string;
  [key: string]:
    | string
    | number
    | boolean
    | Record<string, string | number | boolean>;
}

interface EditFormProps {
  user: User;
  currentSection: string;
}

export default function EditForm(props: EditFormProps) {
  const { user, currentSection } = props;
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [currentUser, setCurrentUser] = useState<User>(user);

  useEffect(() => {
    const sectionData =
      currentUser.user[currentSection as keyof typeof currentUser.user];
    if (!sectionData) return;

    setFormData(sectionData);
  }, [user, currentSection]);

  const debouncedUpdate = useCallback(
    debounce((data: Record<string, any>) => {
      dispatch(updateUser({ [currentSection]: data }));
    }, 500),
    [currentSection, dispatch]
  );
  console.log(user)

  useEffect(() => {
    debouncedUpdate(formData);
    return () => {
      debouncedUpdate.cancel();
    };
  }, [formData, debouncedUpdate]);

  const handleChange = (key: string, value: string, subKey?: string) => {
    setCurrentUser((prev) => ({
      ...prev,
      user: {
        ...prev.user,
        [currentSection]: {
          ...prev.user[currentSection as keyof typeof prev.user],
          [key]: subKey
            ? {
                ...(prev.user[currentSection as keyof typeof prev.user] as Record<string, any>)[key],
                [subKey]: value,
              }
            : value,
        },
      },
    }));
    setFormData((prev) => ({
      ...prev,
      [key]: subKey ? { ...prev[key], [subKey]: value } : value,
    }));
  };

  const handleDelete = (key: string, subKey?: string) => {
    if (!subKey || subKey === "" || subKey === undefined) {
      const section =
        currentUser.user[currentSection as keyof typeof currentUser.user];
      const filteredData = { ...section };
      delete filteredData[key as keyof typeof section];
      setFormData(filteredData);
      dispatch(updateUser({ [currentSection]: filteredData }));
    } else {
      const section = currentUser.user[
        currentSection as keyof typeof currentUser.user
      ] as Record<string, Record<string, string>>;
      const test = section[key as keyof typeof section];
      const filteredData = { ...section };
      filteredData[key as keyof typeof section] = { ...test };
      delete filteredData[key as keyof typeof section][
        subKey as keyof typeof test
      ];
      setFormData(filteredData);
      dispatch(updateUser({ [currentSection]: filteredData }));
    }
  };

  const renderForm = (): React.ReactNode => {
    let activeSection;

    Object.keys(currentUser.user).forEach((section) => {
      if (section === currentSection) {
        activeSection = section;
      }
    });

    if (activeSection === undefined) return;

    const sectionData = currentUser.user[activeSection] as SectionItem[];

    return (
      <StyledEditFormContainer>
        <Grid sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <StyledHeaderText>{activeSection}</StyledHeaderText>
          {Object.keys(sectionData).map((key) => {
            const item = sectionData[key as keyof typeof sectionData];
            if (
              typeof item === "string" ||
              typeof item === "number" ||
              typeof item === "boolean"
            ) {
              return (
                <React.Fragment key={key}>
                  <StyledContainer>
                    <StyledTextField
                      label={key}
                      value={item}
                      onChange={(e) => handleChange(key, e.target.value)}
                      variant="filled"
                    />
                    {key !== "name" && (
                      <StyledDeleteButton onClick={() => handleDelete(key)} />
                    )}
                  </StyledContainer>
                </React.Fragment>
              );
            } else {
              return (
                <Grid
                  key={key}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <StyledContainer>
                    <StyledHeaderText>{key}</StyledHeaderText>
                    <StyledDeleteButton onClick={() => handleDelete(key)} />
                  </StyledContainer>
                  {Object.keys(
                    item as Record<string, string | number | boolean>
                  ).map((subKey) => {
                    return (
                      <React.Fragment key={subKey}>
                        <StyledContainer>
                          <StyledTextField
                            label={subKey}
                            value={JSON.stringify(
                              (
                                item as Record<
                                  string,
                                  string | number | boolean
                                >
                              )[subKey]
                            ).replace(/^"|"$/g, "")}
                            onChange={(e) =>
                              handleChange(key, e.target.value, subKey)
                            }
                            variant="filled"
                          />
                          <StyledDeleteButton
                            onClick={() => handleDelete(key, subKey)}
                          />
                        </StyledContainer>
                      </React.Fragment>
                    );
                  })}
                </Grid>
              );
            }
          })}
        </Grid>
      </StyledEditFormContainer>
    );
  };

  return <StyledEditFormWrapper>{renderForm()}</StyledEditFormWrapper>;
}
