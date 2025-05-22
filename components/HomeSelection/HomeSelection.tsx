import { useNavigate } from "react-router-dom";

import {
  StyledCard,
  StyledCardContainer,
  StyledCardContent,
  StyledCardDescription,
  StyledCardTitle,
  StyledContainer,
  StyledDocumentCheckIcon,
  StyledPencilSquareIcon,
  StyledTitle,
  StyledTitleContainer,
} from "./style";

export default function HomeSelection() {
  const navigate = useNavigate();

  const navigateToEditPage = (): void => {
    navigate("/edit");
  };

  const navigateToViewPage = (): void => {
    navigate("/view");
  };

  return (
    <StyledContainer>
      <StyledTitleContainer>
        <StyledTitle>Home</StyledTitle>
      </StyledTitleContainer>
      <StyledCardContainer>
        <StyledCard onClick={navigateToEditPage}>
          <StyledCardContent>
            <StyledPencilSquareIcon />
            <StyledCardTitle>Edit</StyledCardTitle>
            <StyledCardDescription>
              Edit your existing portfolio/create a new one
            </StyledCardDescription>
          </StyledCardContent>
        </StyledCard>
        <StyledCard onClick={navigateToViewPage}>
          <StyledCardContent>
            <StyledDocumentCheckIcon />
            <StyledCardTitle>View</StyledCardTitle>
            <StyledCardDescription>
              View your existing portfolio
            </StyledCardDescription>
          </StyledCardContent>
        </StyledCard>
      </StyledCardContainer>
    </StyledContainer>
  );
}
