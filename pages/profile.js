import styled from "styled-components";
import Header from "../components/Header";
import SelectAvatar from "../components/SelectAvatar";
import User from "../components/User";
import CommentForm from "../components/CommentForm";
import CommentsList from "../components/CommentsList";
import { useRef } from "react";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 160px;
  align-items: center;
  gap: 25px;
  padding: 20px;
`;

export default function Profile({ isSolvedPuzzleSum }) {
  const inputCommentRef = useRef();

  return (
    <>
      <Header>Profil</Header>
      <Wrapper>
        <SelectAvatar />
        <User />
      </Wrapper>

      <p>Du hast {isSolvedPuzzleSum}/4 Rätsel gelöst.</p>
      <CommentForm inputCommentRef={inputCommentRef} />
      <CommentsList inputCommentRef={inputCommentRef} />
    </>
  );
}
