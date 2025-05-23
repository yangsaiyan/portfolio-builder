import React from "react";
import type { RootState } from "../../redux/store";
import { StyledEditFormWrapper } from "./style";

type User = RootState["user"];

interface EditFormProps {
  user: User;
  currentSection: string;
}

export default function EditForm(props: EditFormProps) {
  const { user, currentSection } = props;

  console.log(user, currentSection);

  return <StyledEditFormWrapper></StyledEditFormWrapper>;
}
