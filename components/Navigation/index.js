import Link from "next/link";
import useRouter from "next/router";
import styled from "styled-components";
import { HouseSvg } from "../../utils/icons";

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

const StyledLink = styled(Link)``;

export default function Navigation() {
  const router = useRouter;
  const currentPathname = router.pathname;
  console.log(currentPathname);
  return (
    <StyledNavigation>
      <StyledLink href="/">
        <HouseSvg active={router.pathname === "/" && "adtive"} />
      </StyledLink>
    </StyledNavigation>
  );
}
