import Link from "next/link";
import useRouter from "next/router";
import styled from "styled-components";
import { HouseSvg } from "../../utils/icons";
import { useEffect, useState } from "react";

const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--my-blue);
  width: 320px;
  height: 68px;
`;

const StyledLink = styled(Link)`
&:hover {
    transform: scale(1.1);
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
            <HouseSvg isFilled={router.pathname === "/" && "isFilled"} />
          </StyledLink>
        </StyledNavigation>
      )}
    </>
  );
}
