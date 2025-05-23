import { useState } from "react";
import {
  StyledSidebarContainer,
  StyledMenuIcon,
  StyledSidebarHeader,
  StyledSidebarWrapper,
  StyledTitle,
  StyledSectionContainer,
  StyledSectionText,
  StyledPlusIcon,
  StyledPlusIconContainer,
  StyledSectionTextContainer,
} from "./style";
import { Collapse } from "@mui/material";
import EditAddSectionPopup from "../EditAddSectionPopup/EditAddSectionPopup";
import type { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/user/reducer";

type User = RootState["user"];

interface EditFormProps {
  user: User;
  handleSectionChange: (section: string) => void;
  currentSection: string;
}

export default function EditSidebar(props: EditFormProps) {
  const { user, handleSectionChange, currentSection } = props;
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isRotated, setIsRotated] = useState<boolean>(false);
  const [isAddSectionPopupOpen, setIsAddSectionPopupOpen] =
    useState<boolean>(false);

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };

  const handleAddSectionPopup = (): void => {
    setIsAddSectionPopupOpen(true);
  };

  const handleUpdateSection = (section: string): void => {
    dispatch(updateUser({ [section]: {} }));
  };

  return (
    <StyledSidebarWrapper>
      <StyledSidebarHeader isOpen={isOpen}>
        <StyledMenuIcon onClick={toggleSidebar} isRotated={isRotated} />
        <StyledTitle>Section</StyledTitle>
      </StyledSidebarHeader>
      <StyledSidebarContainer isOpen={isOpen}>
        <StyledSectionContainer>
          {Object.keys(user.user).map((section) => (
            <Collapse key={section} sx={{ width: "100%" }}>
              <StyledSectionTextContainer
                active={section.toLowerCase() === currentSection.toLowerCase()}
                onClick={() => handleSectionChange(section)}
              >
                <StyledSectionText>{section}</StyledSectionText>
              </StyledSectionTextContainer>
            </Collapse>
          ))}
          <StyledPlusIconContainer>
            <StyledPlusIcon onClick={handleAddSectionPopup} />
          </StyledPlusIconContainer>
        </StyledSectionContainer>
      </StyledSidebarContainer>
      <EditAddSectionPopup
        isAddSectionPopupOpen={isAddSectionPopupOpen}
        setIsAddSectionPopupOpen={setIsAddSectionPopupOpen}
        handleAddSection={handleUpdateSection}
      />
    </StyledSidebarWrapper>
  );
}
