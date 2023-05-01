import styled from "styled-components";
import Header from "../components/Header";
import SelectAvatar from "../components/SelectAvatar";
import UserName from "../components/UserName";
import CommentForm from "../components/CommentForm";
import CommentsList from "../components/CommentsList";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 160px;
  align-items: center;
  gap: 25px;
  padding: 20px;
`;

export default function Profile({ isSolvedPuzzleSum }) {
  return (
    <>
      <Header>Profil</Header>
      <Wrapper>
        <SelectAvatar />
        <UserName />
      </Wrapper>
      <p>Du hast {isSolvedPuzzleSum}/4 Rätsel gelöst.</p>
      <CommentForm />
      <CommentsList />
    </>
  );
}
