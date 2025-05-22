import EditSidebar from "../../../components/EditSidebar/EditSidebar";
import EditForm from "../../../components/EditForm/EditForm";
import { StyledContainer } from "./style";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { useState } from "react";

export default function Edit() {

  const user = useSelector((state: RootState) => state.user);
  const [currentSection, setCurrentSection] = useState<string>("Profile");

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  return (
    <StyledContainer>
      <EditSidebar user={user} handleSectionChange={handleSectionChange} currentSection={currentSection} />
      <EditForm user={user} currentSection={currentSection} />
    </StyledContainer>
  );
}
