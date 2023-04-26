import styled from "styled-components";
import Header from "../components/Header";
import SelectAvatar from "../components/SelectAvatar";
import UserName from "../components/UserName";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 150px;
  align-items: center;
  gap: 25px;
  padding: 20px;
`;

export default function Profile() {
  return (
    <>
      <Header>Profil</Header>
      <Wrapper>
        <SelectAvatar />
        <UserName />
      </Wrapper>
    </>
  );
}
