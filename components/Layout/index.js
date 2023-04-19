import styled from "styled-components";
import Header from "../Header";

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
  height: 433px;
  top: 67px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Main>{children}</Main>
    </Wrapper>
  );
}
