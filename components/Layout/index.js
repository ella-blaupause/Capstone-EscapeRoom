import styled from "styled-components";
import Navigation from "../Navigation";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 375px;
  @media (max-width: 414px) {
    width: 100%;
  }
`;

const Main = styled.main`
  position: absolute;
  width: 500px;
  top: 67px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Main>{children}</Main>
      <Navigation />
    </Wrapper>
  );
}
