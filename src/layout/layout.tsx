import { useLocation } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import { StyledGrid } from "./style";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <StyledGrid>
      {/* {location.pathname !== "/landing" && <Navbar />} */}
      {children}
    </StyledGrid>
  );
}
