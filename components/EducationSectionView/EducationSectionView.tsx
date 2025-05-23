import type { RootState } from "../../redux/store";
import { StyledContainer, StyledTitle } from "./styles";

type User = RootState["user"];

interface EducationSectionViewProps {
  user: User;
}
export default function EducationSectionView(props: EducationSectionViewProps) {
  const { user } = props;
  console.log(user);
  return (
    <StyledContainer>
      <StyledTitle>Education</StyledTitle>
    </StyledContainer>
  );
}
