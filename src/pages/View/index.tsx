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
  const touchStartY = useRef<number | null>(null);

  const SECTIONS = ["profile", "skills", "projects", "education"];

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();

      if (isScrolling.current) return;

      isScrolling.current = true;
      const direction = event.deltaY > 0 ? 1 : -1;

      let newIndex = currentSectionIndex + direction;
      if (newIndex >= SECTIONS.length) {
        newIndex = 0; 
      } else if (newIndex < 0) {
        newIndex = SECTIONS.length - 1;
      }

      setCurrentSectionIndex(newIndex);
      setCurrentSection(SECTIONS[newIndex]);

      setTimeout(() => {
        isScrolling.current = false;
      }, 300);
    };

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      touchStartY.current = touch.clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!touchStartY.current || isScrolling.current) return;

      const touch = event.touches[0];
      const deltaY = touchStartY.current - touch.clientY;
      
      if (Math.abs(deltaY) < 50) return;
      isScrolling.current = true;
      const direction = deltaY > 0 ? 1 : -1;

      let newIndex = currentSectionIndex + direction;
      if (newIndex >= SECTIONS.length) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = SECTIONS.length - 1;
      }

      setCurrentSectionIndex(newIndex);
      setCurrentSection(SECTIONS[newIndex]);

      touchStartY.current = null;
      setTimeout(() => {
        isScrolling.current = false;
      }, 300);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
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
