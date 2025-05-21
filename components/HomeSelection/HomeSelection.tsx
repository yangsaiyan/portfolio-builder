import React from "react";
import {
  CardWrapper,
  StyledCard,
  StyledCardContainer,
  StyledCardContent,
  StyledCardDescription,
  StyledCardTitle,
  StyledContainer,
  StyledDocumentCheckIcon,
  StyledPencilSquareIcon,
  StyledTitleContainer,
} from "./style";
import { StyledTitle } from "../AuthenticationForm/style";

export default function HomeSelection() {
  return (
    <StyledContainer>
      <StyledTitleContainer>
        <StyledTitle>Home</StyledTitle>
      </StyledTitleContainer>
      <StyledCardContainer>
        <StyledCard cardId={1}>
          <StyledCardContent>
            <StyledPencilSquareIcon />
            <StyledCardTitle>Edit</StyledCardTitle>
            <StyledCardDescription>
              Edit your existing portfolio/create a new one
            </StyledCardDescription>
          </StyledCardContent>
        </StyledCard>
        <StyledCard cardId={2}>
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
