import Link from "next/link";
import useRouter from "next/router";
import styled from "styled-components";
import {
  SvgHouse,
  SvgUserCircle,
  SvgUserCircleFilled,
} from "../../utils/icons";
import { useEffect, useState } from "react";
import useGlobalStore from "../../store";
import { darkTheme, lightTheme } from "../../utils/utils";

const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? darkTheme.bar : lightTheme.bar};
  width: 375px;
  height: 86px;
  @media (max-width: 414px) {
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  filter: drop-shadow(5px 5px 8px black);
  &:hover {
    transform: scale(1.1);
  }
`;

export default function Navigation() {
  const isDarkMode = useGlobalStore((state) => state.isDarkMode);
  const router = useRouter;

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <StyledNavigation isDarkMode={isDarkMode}>
          <StyledLink href="/">
            <SvgHouse
              isFilled={router.pathname === "/" && "isFilled"}
              isDarkMode={isDarkMode}
            />
          </StyledLink>
          <StyledLink href="/profile">
            {router.pathname === "/profile" ? (
              <SvgUserCircleFilled isDarkMode={isDarkMode} />
            ) : (
              <SvgUserCircle isDarkMode={isDarkMode} />
            )}
          </StyledLink>
        </StyledNavigation>
      )}
    </>
  );
}
