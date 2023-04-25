import Link from "next/link";
import useRouter from "next/router";
import styled from "styled-components";
import {
  SvgHouse,
  SvgUserCircle,
  SvgUserCircleFilled,
} from "../../utils/icons";
import { useEffect, useState } from "react";

const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: var(--my-blue);
  width: 375px;
  height: 86px;
`;

const StyledLink = styled(Link)`
  &:hover {
    transform: scale(1.1);
  }
`;

export default function Navigation() {
  const router = useRouter;
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <StyledNavigation>
          <StyledLink href="/">
            <SvgHouse isFilled={router.pathname === "/" && "isFilled"} />
          </StyledLink>
          <StyledLink href="/profile">
            {router.pathname === "/profile" ? (
              <SvgUserCircleFilled />
            ) : (
              <SvgUserCircle />
            )}
          </StyledLink>
        </StyledNavigation>
      )}
    </>
  );
}
