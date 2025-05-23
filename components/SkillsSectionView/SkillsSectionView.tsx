import type { RootState } from "../../redux/store";
import { StyledContainer, StyledTitle } from "./styles";

type User = RootState["user"];

interface SkillsSectionViewProps {
  user: User;
}

export default function SkillsSectionView(props: SkillsSectionViewProps) {
  const { user } = props;
  console.log(user);
  return (
    <StyledContainer>
      <StyledTitle>Skills</StyledTitle>
    </StyledContainer>
  );
}
