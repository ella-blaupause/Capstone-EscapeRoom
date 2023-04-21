import styled from "styled-components";
import Header from "../Header";
import Navigation from "../Navigation";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 375px;
`;

const Main = styled.main`
  position: absolute;
  width: 375px;
  top: 67px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Main>{children}</Main>
      <Navigation />
    </Wrapper>
  );
}
