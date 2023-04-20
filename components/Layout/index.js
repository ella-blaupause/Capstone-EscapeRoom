import styled from "styled-components";
import Header from "../Header";
import Navigation from "../Navigation";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 320px;
`;

const Main = styled.main`
  position: absolute;
  width: 320px;
  height: 100vw;
  top: 67px;
  display: flex;
  flex-direction: column;
  align-items: center;

  paddin: 68px 0 0 0;
`;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Main>{children}</Main>
      <Navigation />
    </Wrapper>
  );
}
