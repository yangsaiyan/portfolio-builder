// import { useState } from "react";
import {
  StyledAddSectionPopupActions,
  StyledAddSectionPopupButton,
  StyledAddSectionPopupContainer,
  StyledAddSectionPopupContent,
  // StyledAddSectionPopupInput,
  StyledAddSectionPopupTitle,
  // StyledSuggestionText,
  // StyledSuggestionContainer,
  // StyledSuggestionButton,
  // StyledSuggestionWrapper,
} from "./style";

interface EditAddSectionPopupProps {
  isAddSectionPopupOpen: boolean;
  setIsAddSectionPopupOpen: (isAddSectionPopupOpen: boolean) => void;
  handleAddSection: (section: string) => void;
}

export default function EditAddSectionPopup(props: EditAddSectionPopupProps) {
  const {
    isAddSectionPopupOpen,
    setIsAddSectionPopupOpen,
    //  handleAddSection
  } = props;

  // const [section, setSection] = useState<string>("");
  // const [count, setCount] = useState<number>(0);

  // const handleAddSectionClick = (): void => {
  //   if (section.trim() === "") return;

  //   handleAddSection(section);
  //   setIsAddSectionPopupOpen(false);
  //   setSection("");
  // };

  // const handleSuggestionClick = (suggestion: string): void => {
  //   setCount(count + 1);
  //   setSection(suggestion);
  //   if (count === 1 && suggestion === section) {
  //     handleAddSectionClick();
  //     setCount(0);
  //   } else if (count === 1 && suggestion !== section) {
  //     setCount(0);
  //   }
  // };

  return (
    <StyledAddSectionPopupContainer
      open={isAddSectionPopupOpen}
      onClose={() => {
        setIsAddSectionPopupOpen(false);
      }}
    >
      <StyledAddSectionPopupContent>
        <StyledAddSectionPopupTitle>Coming Soon</StyledAddSectionPopupTitle>
        {/* <StyledAddSectionPopupInput
          value={section}
          onChange={(e) => {
            setSection(e.target.value);
          }}
        />
        <StyledSuggestionWrapper>
          <StyledSuggestionText>Suggestions</StyledSuggestionText>
          <StyledSuggestionContainer>
            <StyledSuggestionButton
              onClick={() => handleSuggestionClick("Skills")}
            >
              Skills
            </StyledSuggestionButton>
            <StyledSuggestionButton
              onClick={() => handleSuggestionClick("Experience")}
            >
              Experience
            </StyledSuggestionButton>
            <StyledSuggestionButton
              onClick={() => handleSuggestionClick("Projects")}
            >
              Projects
            </StyledSuggestionButton>
            <StyledSuggestionButton
              onClick={() => handleSuggestionClick("Education")}
            >
              Education
            </StyledSuggestionButton>
            <StyledSuggestionButton
              onClick={() => handleSuggestionClick("Certifications")}
            >
              Certifications
            </StyledSuggestionButton>
            <StyledSuggestionButton
              onClick={() => handleSuggestionClick("Achievements")}
            >
              Achievements
            </StyledSuggestionButton>
            <StyledSuggestionButton
              onClick={() => handleSuggestionClick("Publications")}
            >
              Publications
            </StyledSuggestionButton>
            <StyledSuggestionButton
              onClick={() => handleSuggestionClick("Awards")}
            >
              Awards
            </StyledSuggestionButton>
            <StyledSuggestionButton
              onClick={() => handleSuggestionClick("Patents")}
            >
              Patents
            </StyledSuggestionButton>
            <StyledSuggestionButton
              onClick={() => handleSuggestionClick("Volunteer")}
            >
              Volunteer
            </StyledSuggestionButton>
            <StyledSuggestionButton
              onClick={() => handleSuggestionClick("References")}
            >
              References
            </StyledSuggestionButton>
          </StyledSuggestionContainer>
        </StyledSuggestionWrapper> */}
        <StyledAddSectionPopupActions>
          {/* <StyledAddSectionPopupButton onClick={handleAddSectionClick}>
            Add
          </StyledAddSectionPopupButton> */}
          <StyledAddSectionPopupButton
            onClick={() => {
              setIsAddSectionPopupOpen(false);
            }}
          >
            Cancel
          </StyledAddSectionPopupButton>
        </StyledAddSectionPopupActions>
      </StyledAddSectionPopupContent>
    </StyledAddSectionPopupContainer>
  );
}
