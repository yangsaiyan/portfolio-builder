import { useState, useEffect, useRef } from "react";
import HeroSectionView from "../../../components/HeroSectionView/HeroSectionView";
import SkillsSectionView from "../../../components/SkillsSectionView/SkillsSectionView";
import ProjectsSectionView from "../../../components/ProjectsSectionView/ProjectsSectionView";
import EducationSectionView from "../../../components/EducationSectionView/EducationSectionView";
import { StyledContainer } from "./style";
import SpinningEarthBackground from "../../../components/SpinningPlanet/SpinningEarthBackground";
import type { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";

export default function View() {
  const user = useSelector((state: RootState) => state.user);
  const [currentSection, setCurrentSection] = useState<string>("profile");
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const SECTIONS = ["profile", "skills", "projects", "education"];

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();

      if (isScrolling.current) return;

      isScrolling.current = true;
      const direction = event.deltaY > 0 ? 1 : -1;

      // Calculate new index with wrapping
      let newIndex = currentSectionIndex + direction;
      if (newIndex >= SECTIONS.length) {
        newIndex = 0; // Reset to first section
      } else if (newIndex < 0) {
        newIndex = SECTIONS.length - 1; // Go to last section
      }

      setCurrentSectionIndex(newIndex);
      setCurrentSection(SECTIONS[newIndex]);

      // Reset scrolling flag after a short delay
      setTimeout(() => {
        isScrolling.current = false;
      }, 300);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSectionIndex]);

  const handleRenderSection = () => {
    switch (currentSection) {
      case "profile":
        return <HeroSectionView user={user} />;
      case "skills":
        return <SkillsSectionView user={user} />;
      case "projects":
        return <ProjectsSectionView user={user} />;
      case "education":
        return <EducationSectionView user={user} />;
      default:
        return <HeroSectionView user={user} />;
    }
  };

  return (
    <StyledContainer ref={containerRef}>
      <SpinningEarthBackground
        sections={SECTIONS.length}
        currentSection={currentSectionIndex}
      />
      {handleRenderSection()}
    </StyledContainer>
  );
}
