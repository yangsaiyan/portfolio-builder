import type { RootState } from "../../redux/store";
import { StyledContainer, StyledTitle } from "./style";

type User = RootState["user"];

interface ProjectsSectionViewProps {
  user: User;
}

export default function ProjectsSectionView(props: ProjectsSectionViewProps) {
  const { user } = props;
  console.log(user);
  return (
    <StyledContainer>
      <StyledTitle>Projects</StyledTitle>
    </StyledContainer>
  );
}
